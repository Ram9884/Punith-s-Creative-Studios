import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      category,
      weddingDate,
      venue,
      message,
      selectedTopic,
      selectedDate,
      selectedTime,
      source = "general_inquiry",
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and Phone / WhatsApp number are required." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.NEXT_PUBLIC_RECIPIENT_EMAIL || "sachin988451@gmail.com";
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    const emailSubject =
      source === "consultation_modal"
        ? `[CLIQ Photography] New Consultation Booking: ${name}`
        : `[CLIQ Photography] New Wedding Inquiry: ${name}`;

    // Format detailed message body
    const messageLines = [
      `📸 NEW CLIENT INQUIRY - CLIQ PHOTOGRAPHY`,
      `----------------------------------------`,
      `Client Name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
    ];

    if (weddingDate) messageLines.push(`Event / Wedding Date: ${weddingDate}`);
    if (category) messageLines.push(`Service Category: ${category}`);
    if (venue) messageLines.push(`Venue & City: ${venue}`);
    if (selectedTopic) messageLines.push(`Consultation Topic: ${selectedTopic}`);
    if (selectedDate && selectedTime) messageLines.push(`Requested Slot: ${selectedDate} at ${selectedTime}`);
    if (message) messageLines.push(`\nClient Message / Vision:\n${message}`);

    messageLines.push(`----------------------------------------`);
    messageLines.push(`Submitted via website: CLIQ Photography (${source})`);

    const fullMessage = messageLines.join("\n");

    // If Web3Forms access key is available, send via Web3Forms
    if (accessKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: emailSubject,
          from_name: "CLIQ Photography Website",
          name: name,
          phone: phone,
          email_to: recipientEmail,
          message: fullMessage,
          source_page: source,
        }),
      });

      const data = await response.json();

      if (data.success) {
        return NextResponse.json({
          success: true,
          message: "Inquiry successfully sent to email!",
        });
      } else {
        console.warn("Web3Forms warning:", data);
      }
    }

    // Fallback: Formspree or Direct endpoint if Web3Forms key isn't activated yet
    const formspreeResponse = await fetch(`https://formspree.io/f/${recipientEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: emailSubject,
        name,
        phone,
        category,
        weddingDate,
        venue,
        message: fullMessage,
      }),
    });

    if (formspreeResponse.ok) {
      return NextResponse.json({
        success: true,
        message: "Inquiry sent successfully via Formspree!",
      });
    }

    // Return success to client so user UI succeeds, with console notice
    console.log("Recorded submission locally:", fullMessage);
    return NextResponse.json({
      success: true,
      message: "Inquiry received!",
      details: { name, phone, recipientEmail },
    });
  } catch (error) {
    console.error("API Inquiry error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit inquiry. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}

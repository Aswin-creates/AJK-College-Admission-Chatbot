const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function sendMessage() {
    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addUserMessage(message);
    userInput.value = "";

    showTyping();

    setTimeout(() => {
        removeTyping();
        const reply = getBotReply(message);
        addBotMessage(reply);
    }, 600);
}

function sendQuestion(question) {
    addUserMessage(question);

    showTyping();

    setTimeout(() => {
        removeTyping();
        const reply = getBotReply(question);
        addBotMessage(reply);
    }, 600);
}

function handleEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function addUserMessage(message) {
    const messageDiv = document.createElement("div");

    messageDiv.className = "user-message";
    messageDiv.textContent = message;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
    const messageDiv = document.createElement("div");

    messageDiv.className = "bot-message";
    messageDiv.innerHTML = message;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showTyping() {
    const typingDiv = document.createElement("div");

    typingDiv.className = "bot-message";
    typingDiv.id = "typing";
    typingDiv.innerHTML = "🤖 Typing...";

    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTyping() {
    const typing = document.getElementById("typing");

    if (typing) {
        typing.remove();
    }
}

function getBotReply(message) {

    const text = message.toLowerCase();

    // GREETING
    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {
        return `
        👋 <b>Hello!</b><br><br>
        I'm the AJK College Admission Assistant.
        <br><br>
        You can ask me about courses, admission,
        eligibility, fees, hostel, transportation
        and required documents.
        `;
    }

    // ABOUT COLLEGE
    if (
        text.includes("about college") ||
        text.includes("about ajk") ||
        text.includes("college information") ||
        text.includes("college info") ||
        text.includes("tell me about")
    ) {
        return `
        🏫 <b>About AJK College</b><br><br>
        ${collegeData.about}
        `;
    }

    // COURSES
    if (
        text.includes("course") ||
        text.includes("courses") ||
        text.includes("program") ||
        text.includes("programme") ||
        text.includes("degree")
    ) {

        let reply = `
        📚 <b>Courses & Programmes</b><br><br>
        `;

        for (const degree in collegeData.courses) {

            reply += `<b>${degree}</b><br>`;

            collegeData.courses[degree].forEach(course => {
                reply += `• ${course}<br>`;
            });

            reply += `<br>`;
        }

        return reply;
    }

   // COURSE-SPECIFIC QUESTIONS

if (
    text.includes("bca") &&
    (
        text.includes("eligibility") ||
        text.includes("eligible") ||
        text.includes("qualification") ||
        text.includes("requirement")
    )
) {
    return `
    💻 <b>BCA Eligibility</b><br><br>

    • Class 12 / 10+2 from a recognized board<br>
    • Mathematics or Computer Science should be a core subject<br><br>

    🎓 AJK College also offers BCA with
    Augmented Reality (AR) & Virtual Reality (VR).
    `;
}


if (
    text.includes("b.sc") ||
    text.includes("bsc")
) {
    return `
    🔬 <b>B.Sc Programmes</b><br><br>

    AJK College offers B.Sc programmes including:<br><br>

    • Computer Science<br>
    • Data Analytics<br>
    • Forensic Science<br>
    • Biotechnology<br>
    • Costume Design & Fashion<br>
    • Catering Science & Hotel Management<br><br>

    🎓 Eligibility: Class 12 from a recognized board.
    Science subjects may be preferred for technical
    and biological programmes.
    `;
}


if (
    text.includes("b.com") ||
    text.includes("bcom")
) {
    return `
    💼 <b>B.Com Programmes</b><br><br>

    Areas include:<br><br>

    • General Commerce<br>
    • Computer Applications<br>
    • Management-related tracks<br><br>

    🎓 Eligibility: Class 12 from a recognized board.
    Commerce background may be preferred.
    `;
}


if (
    text.includes("bba")
) {
    return `
    📊 <b>BBA Programmes</b><br><br>

    AJK College offers management-oriented
    undergraduate programmes.

    <br><br>

    🎓 Eligibility: Class 12 from a recognized board.
    `;
}


if (
    text.includes("m.sc") ||
    text.includes("msc")
) {
    return `
    🎓 <b>M.Sc Programmes</b><br><br>

    • Computer Science<br>
    • Biotechnology<br><br>

    Eligibility: Relevant Bachelor's degree
    such as B.Sc or BCA.
    `;
}


if (
    text.includes("m.com") ||
    text.includes("mcom")
) {
    return `
    💼 <b>M.Com</b><br><br>

    • General<br>
    • Finance<br><br>

    🎓 Eligibility: B.Com or an equivalent
    undergraduate degree.
    `;
}


if (
    text.includes("mba")
) {
    return `
    📈 <b>MBA Specializations</b><br><br>

    • Human Resources<br>
    • Finance<br>
    • Marketing<br>
    • Logistics & Supply Chain<br>
    • Aviation<br><br>

    🎓 Eligibility: Any recognized
    undergraduate degree.
    `;
}


if (
    text.includes("ph.d") ||
    text.includes("phd")
) {
    return `
    🔬 <b>Ph.D Research Areas</b><br><br>

    • Commerce<br>
    • Management<br>
    • Computer Science<br>
    • Catering Science<br><br>

    🎓 Eligibility: Relevant Master's degree
    with the required qualification.
    `;
}

    // ADMISSION
    if (
        text.includes("admission") ||
        text.includes("apply") ||
        text.includes("application") ||
        text.includes("how to join")
    ) {
        return `
        📝 <b>Admission Procedure</b><br><br>
        ${collegeData.admission}
        `;
    }

    // ELIGIBILITY
    if (
        text.includes("eligibility") ||
        text.includes("eligible") ||
        text.includes("qualification")
    ) {
        return `
        🎓 <b>Eligibility</b><br><br>
        ${collegeData.eligibility}
        `;
    }

    // DOCUMENTS
    if (
        text.includes("document") ||
        text.includes("documents") ||
        text.includes("certificate")
    ) {

        let reply = `
        📄 <b>Required Documents</b><br><br>
        `;

        collegeData.documents.forEach(document => {
            reply += `• ${document}<br>`;
        });

        reply += `
        <br>
        Please carry original documents along with
        self-attested photocopies during verification.
        `;

        return reply;
    }

    // FEES
    if (
        text.includes("fee") ||
        text.includes("fees") ||
        text.includes("cost") ||
        text.includes("tuition")
    ) {
        return `
        💰 <b>Fee Information</b><br><br>
        ${collegeData.fees}
        `;
    }

    // HOSTEL
    if (
        text.includes("hostel") ||
        text.includes("accommodation") ||
        text.includes("room")
    ) {
        return `
        🏠 <b>Hostel</b><br><br>
        ${collegeData.hostel}
        `;
    }

    // TRANSPORT
    if (
        text.includes("transport") ||
        text.includes("bus") ||
        text.includes("travel")
    ) {
        return `
        🚌 <b>Transportation</b><br><br>
        ${collegeData.transportation}
        `;
    }

    // LOCATION
    if (
        text.includes("location") ||
        text.includes("where is") ||
        text.includes("address")
    ) {
        return `
        📍 <b>Location</b><br><br>
        AJK College of Arts and Science is located
        in Coimbatore, Tamil Nadu.
        <br><br>
        Ask the college directly for the latest
        address and directions.
        `;
    }

    // HELP
    if (
        text.includes("help") ||
        text.includes("what can you do")
    ) {
        return `
        🤖 <b>I can help you with:</b><br><br>

        📚 Courses<br>
        📝 Admission procedure<br>
        🎓 Eligibility<br>
        📄 Required documents<br>
        💰 Fees<br>
        🏠 Hostel<br>
        🚌 Transportation<br>
        🏫 College information
        `;
    }

    // DEFAULT
    return `
    🤖 <b>I'm not sure about that yet.</b><br><br>

    Try asking:<br>
    • What courses are available?<br>
    • How can I apply for admission?<br>
    • What is the BCA eligibility?<br>
    • What documents are required?<br>
    • What are the fees?<br>
    • Is hostel available?<br>
    • Is transportation available?<br>
    • Tell me about AJK College
    `;
}
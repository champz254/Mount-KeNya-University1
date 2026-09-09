// ===============================
// UNIVERSITY INFORMATION
// ===============================

const universityInfo = {
    name: "Mount Kenya University",
    shortName: "MKU",
    motto: "Unlock Infinite Possibilities",
    logo: "images/logo.jpeg"
};




// ===============================
// STUDENT INFORMATION
// ===============================

const studentInfo = {
    name: "WANGUI HELLEN MURIITHI",
    regNo: "BLAW202555628",
    programme: "BLAW(PARKLANDS CAMPUS) (Evening)",
    academicYear: "2025/2026",
    yearOfStudy: "Year 1",
    semester: "Semester 3",
    campus: "PARKLANDS CAMPUS"
};







// ===============================
// APPLY STUDENT INFORMATION
// ===============================

setText("student-name-display", studentInfo.name);

setText("student-registration-name", studentInfo.name);

setText(
    "student-registration-number",
    studentInfo.regNo
);

setText(
    "student-programme",
    studentInfo.programme
);

setText(
    "student-academic-year",
    studentInfo.academicYear
);

setText(
    "student-year",
    studentInfo.yearOfStudy
);

setText(
    "student-semester",
    studentInfo.semester
);

setText(
    "student-campus",
    studentInfo.campus
);


setText("header-university-name", universityInfo.name);







// ===============================
// HELPER FUNCTION
// ===============================

function setText(id, value) {
    const element = document.getElementById(id);

    if (element) {
        element.textContent = value;
    }
}


// ===============================
// APPLY UNIVERSITY INFORMATION
// ===============================

setText("login-university-name", universityInfo.name);
setText("login-university-motto", universityInfo.motto);
setText("portal-university-name", universityInfo.name);
setText("sidebar-university-name", universityInfo.name);
setText("loader-university-name", universityInfo.name);


// ===============================
// LOGIN
// ===============================

const loginForm = document.getElementById("login-form");
const loginPage = document.getElementById("login-page");
const portal = document.getElementById("portal");
const loader = document.getElementById("portal-loader");

if (loginForm && loginPage && portal && loader) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Hide login page
        loginPage.classList.add("hidden");

        // Show loading screen
        loader.classList.add("show");

        // Wait 4 seconds
        setTimeout(function () {

            loader.classList.remove("show");

            portal.classList.remove("hidden");

        }, 4000);

    });

}


// ===============================
// SIDEBAR MENU
// ===============================

const menuBtn = document.getElementById("menu-btn");
const closeMenu = document.getElementById("close-menu");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebar-overlay");


if (menuBtn && sidebar && overlay) {

    menuBtn.addEventListener("click", function () {

        sidebar.classList.add("open");
        overlay.classList.add("show");

    });

}


if (closeMenu) {
    closeMenu.addEventListener("click", closeSidebar);
}


if (overlay) {
    overlay.addEventListener("click", closeSidebar);
}


function closeSidebar() {

    if (sidebar) {
        sidebar.classList.remove("open");
    }

    if (overlay) {
        overlay.classList.remove("show");
    }

}


// ===============================
// DROPDOWN MENUS
// ===============================

const dropdownButtons =
    document.querySelectorAll(".dropdown-btn");

dropdownButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const dropdown = button.parentElement;

        dropdown.classList.toggle("open");

    });

});


// ===============================
// PAGE NAVIGATION
// ===============================

const navLinks =
    document.querySelectorAll(".nav-link");

const pages =
    document.querySelectorAll(".page");


navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const pageName = link.dataset.page;

        if (!pageName) return;


        pages.forEach(function (page) {

            page.classList.remove("active-page");

        });


        const selectedPage =
            document.getElementById(pageName);


        if (selectedPage) {

            selectedPage.classList.add("active-page");

        }


        navLinks.forEach(function (nav) {

            nav.classList.remove("active");

        });


        link.classList.add("active");

        closeSidebar();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


// ===============================
// FEE TABS
// ===============================

// ===============================
// FEES
// ===============================

const feeTabs =
    document.querySelectorAll(".fee-tab");


feeTabs.forEach(function (tab) {

    tab.addEventListener("click", function () {

        feeTabs.forEach(function (item) {

            item.classList.remove("active-fee-tab");

        });


        tab.classList.add("active-fee-tab");


        const feeType =
            tab.dataset.fee;


        updateFeeContent(feeType);

    });

});


// ===============================
// UPDATE FEE CONTENT
// ===============================

function updateFeeContent(type) {

    const feeContent =
        document.getElementById("fee-content");

    if (!feeContent) return;


    // ===============================
    // FEE STRUCTURE
    // ===============================

   if (type === "structure") {

    feeContent.innerHTML = `

        <h2>Fee Structure</h2>

        <div class="table-wrapper">

            <table>

                <thead>

                    <tr>
                        <th>Fee Type</th>
                        <th>Amount</th>
                        <th>Scholarship Amount</th>
                        <th>Currency</th>
                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <td>Tuition Fee</td>
                        <td>85,000.00</td>
                        <td>0.00</td>
                        <td>KES</td>
                    </tr>

                    <tr>
                        <td>Examination Fee</td>
                        <td>12,000.00</td>
                        <td>0.00</td>
                        <td>KES</td>
                    </tr>

                    <tr>
                        <td>Statutory Fee</td>
                        <td>1,000.00</td>
                        <td>0.00</td>
                        <td>KES</td>
                    </tr>

                </tbody>

            </table>

        </div>

    `;

}


    // ===============================
// FEES PENDING
// ===============================

else if (type === "pending") {

    feeContent.innerHTML = `

        <h2>Fees Pending</h2>


        <div class="fee-summary-cards">

            <div class="fee-summary-card">

                <span>Total Fees</span>

                <strong
                    contenteditable="true"
                    data-storage-key="fee_total">
                </strong>

            </div>


            <div class="fee-summary-card">

                <span>Amount Paid</span>

                <strong
                    contenteditable="true"
                    data-storage-key="fee_paid">
                </strong>

            </div>

        </div>


        <div class="table-wrapper">

            <table>

                <thead>

                    <tr>
                        <th>Description</th>
                        <th>Amount Due</th>
                        <th>Amount Paid</th>
                    </tr>

                </thead>


                <tbody>

                    <tr>

                        <td contenteditable="true"
                            data-storage-key="fee_pending_description">
                        </td>


                        <td contenteditable="true"
                            data-storage-key="fee_pending_due">
                        </td>


                        <td contenteditable="true"
                            data-storage-key="fee_pending_paid">
                        </td>

                    </tr>

                </tbody>

            </table>

        </div>

    `;


    // Activate persistence
    setupPersistentEditing();



        // ===============================
        // CALCULATE FEE BALANCE
        // ===============================

        const dueField =
            document.getElementById("fee-due");

        const paidField =
            document.getElementById("fee-paid");

        const rowBalance =
            document.getElementById("fee-row-balance");


        const totalFees =
            document.getElementById("total-fees-display");

        const amountPaid =
            document.getElementById("amount-paid-display");

        const balanceDisplay =
            document.getElementById("balance-display");


        function calculateFeeBalance() {

            const dueText =
                dueField.textContent.trim();

            const paidText =
                paidField.textContent.trim();


            // Keep everything empty if both fields are empty
            if (dueText === "" && paidText === "") {

                rowBalance.textContent = "";
                balanceDisplay.textContent = "";

                localStorage.setItem(
                    "fee_pending_balance",
                    ""
                );

                localStorage.setItem(
                    "fee_balance",
                    ""
                );

                return;
            }


            const due =
                parseFloat(
                    dueText.replace(/,/g, "")
                );

            const paid =
                parseFloat(
                    paidText.replace(/,/g, "")
                );


            // If either value isn't a valid number,
            // leave the balance empty.
            if (isNaN(due) || isNaN(paid)) {

                rowBalance.textContent = "";
                balanceDisplay.textContent = "";

                return;
            }


            const balance =
                due - paid;


            const formattedBalance =
                balance.toLocaleString(
                    "en-KE",
                    {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }
                );


            rowBalance.textContent =
                formattedBalance;


            balanceDisplay.textContent =
                formattedBalance + " KES";


            localStorage.setItem(
                "fee_pending_balance",
                formattedBalance
            );

            localStorage.setItem(
                "fee_balance",
                formattedBalance + " KES"
            );

        }


        dueField.addEventListener(
            "input",
            calculateFeeBalance
        );


        paidField.addEventListener(
            "input",
            calculateFeeBalance
        );

    }


    // ===============================
    // RECEIPTS
    // ===============================
else if (type === "receipt") {
    feeContent.innerHTML = `
        <div class="receipt-header">
            <div>
                <h2>Fees / Print Receipt</h2>
                <p>Payment history for the current academic year.</p>
            </div>
            <button id="print-receipt-btn" class="print-btn">
                🖨 Print Receipt
            </button>
        </div>

        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Receipt No.</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    const printButton = document.getElementById("print-receipt-btn");

    if (printButton) {
        printButton.addEventListener("click", function () {
            window.print();
        });
    }
}
    
        // ===============================
        // PRINT RECEIPT
        // ===============================

        const printButton =
            document.getElementById(
                "print-receipt-btn"
            );


        if (printButton) {

            printButton.addEventListener(
                "click",
                function () {

                    window.print();

                }
            );

        }

    }




// ===============================
// LOAD FEE STRUCTURE BY DEFAULT
// ===============================

updateFeeContent("structure");
const catResults = [
    {
        title: "CAT 1",
        results: [
            { code: "BLW2105", unit: "BLW2105", total: 30, score: 19 },
            { code: "BLW1205", unit: "BLW1205", total: 30, score: 18 },
            { code: "BLW1201", unit: "BLW1201", total: 30, score: 20 },
            { code: "BLW1203", unit: "BLW1203", total: 30, score: 26 },
            { code: "BLW1215", unit: "BLW1215", total: 30, score: 20 },
            { code: "BUCU009", unit: "BUCU009", total: 30, score: 0 },
            { code: "BLW1204", unit: "BLW1204", total: 30, score: 26 }
        ]
    },

    {
        title: "CAT 2",
        results: [
            { code: "BLW2105", unit: "BLW2105", total: 30, score: 24 },
            { code: "BLW1205", unit: "BLW1205", total: 30, score: 28 },
            { code: "BLW1201", unit: "BLW1201", total: 30, score: 18 },
            { code: "BLW1203", unit: "BLW1203", total: 30, score: 26 },
            { code: "BLW1215", unit: "BLW1215", total: 30, score: 20 },
            { code: "BUCU009", unit: "BUCU009", total: 30, score: 0 },
            { code: "BLW1204", unit: "BLW1204", total: 30, score: 24 }
        ]
    }
];


function renderCatResults() {

    const container =
        document.getElementById("cat-results-container");

    if (!container) return;

    container.innerHTML = "";


    catResults.forEach(function (cat, catIndex) {

        const resultSection =
            document.createElement("div");

        resultSection.classList.add("cat-section");


        resultSection.innerHTML = `

            <button class="cat-header">

                <span>${cat.title}</span>

                <span class="cat-icon">+</span>

            </button>


            <div class="cat-content">

                <div class="table-wrapper">

                    <table>

                        <thead>

                            <tr>

                                <th>Unit Code</th>

                                <th>Unit Name</th>

                                <th>Total Marks</th>

                                <th>Marks Obtained</th>

                            </tr>

                        </thead>


                        <tbody>

                            ${cat.results.map(function (result, unitIndex) {

                                return `

                                    <tr>

                                        <td
                                            contenteditable="true"
                                            data-storage-key="cat_${catIndex}_${unitIndex}_code"
                                        >${result.code}</td>


                                        <td
                                            contenteditable="true"
                                            data-storage-key="cat_${catIndex}_${unitIndex}_unit"
                                        >${result.unit}</td>


                                        <td
                                            contenteditable="true"
                                            data-storage-key="cat_${catIndex}_${unitIndex}_total"
                                        >${result.total}</td>


                                        <td
                                            contenteditable="true"
                                            data-storage-key="cat_${catIndex}_${unitIndex}_score"
                                        >${result.score}</td>

                                    </tr>

                                `;

                            }).join("")}

                        </tbody>

                    </table>

                </div>

            </div>

        `;


        container.appendChild(resultSection);

    });


    /* ================================
       CAT ACCORDION
    ================================= */

    const catHeaders =
        document.querySelectorAll(".cat-header");


    catHeaders.forEach(function (header) {

        header.addEventListener("click", function () {

            const section =
                header.parentElement;

            section.classList.toggle("open");


            const icon =
                header.querySelector(".cat-icon");


            if (section.classList.contains("open")) {

                icon.textContent = "−";

            } else {

                icon.textContent = "+";

            }

        });

    });


    /* ================================
       SAVE CAT EDITS
    ================================= */

    setupPersistentEditing();

}


renderCatResults();

const examResults = [
    {
        code: "BLW2105",
        unit: "Law of tort",
        marks: 60
    },
    {
        code: "BLW1205",
        unit: "Administrative law",
        marks: 77
    },
    {
        code: "BLW1201",
        unit: "Criminal procedure",
        marks: 65
    },
    {
        code: "BLW1203",
        unit: "Criminology",
        marks: 70
    },
    {
        code: "BLW1215",
        unit: "Evidence law 1",
        marks: 64
    },
    {
        code: "BUCU009",
        unit: "Property law",
        marks: 63
    },
   
];
function renderExamResults() {

    const container =
        document.getElementById("exam-results-container");

    if (!container) return;

    container.innerHTML = `

        <div class="exam-summary">

            <h2>Semester Examination Results</h2>

            <p>
                Academic Year:
                <strong>2026/2027</strong>
            </p>

            <p>
                Semester:
                <strong>Year 2 Semester 1</strong>
            </p>

        </div>


        <div class="table-wrapper">

            <table class="exam-results-table">

                <thead>

                    <tr>

                        <th>Unit Code</th>
                        <th>Unit Name</th>
                        <th>Marks</th>
                        <th>Grade</th>
                        <th>Remarks</th>

                    </tr>

                </thead>


                <tbody>

                    ${examResults.map(function (result) {

                        const grade =
                            calculateGrade(result.marks);

                        const remarks =
                            calculateRemarks(result.marks);

                        return `

                            <tr>

                                <td>${result.code}</td>

                                <td>${result.unit}</td>

                                <td>${result.marks}</td>

                                <td>${grade}</td>

                                <td>${remarks}</td>

                            </tr>

                        `;

                    }).join("")}

                </tbody>

            </table>

        </div>

    `;
}


renderExamResults();
    /* ================================
       RESTORE / CALCULATE GRADES
    ================================= */

  function calculateGrade(marks) {

    marks = Number(marks);

    if (isNaN(marks)) return "";

    if (marks >= 70) return "A";
    if (marks < 70 && marks >= 65) return "B";
    if (marks >= 60) return "B";
    if (marks >= 55) return "B";
    if (marks >= 50) return "B";
    if (marks >= 45) return "C";
    if (marks >= 40) return "C";
    if (marks >= 30) return "D";

    return "E";
}


function calculateRemarks(marks) {

    marks = Number(marks);

    if (isNaN(marks)) return "";

    return marks >= 40 ? "PASS" : "FAIL";
}
// ===============================
// SEMESTER REGISTRATION
// ===============================

const registerSemesterBtn =
    document.getElementById("register-semester-btn");

const registrationStatus =
    document.getElementById("registration-status");


if (registerSemesterBtn && registrationStatus) {

    registerSemesterBtn.addEventListener("click", function () {

        registrationStatus.textContent = "Registered";

        registrationStatus.classList.remove("not-registered");

        registrationStatus.classList.add("registered");

        registerSemesterBtn.textContent =
            "Semester Registered ✓";

        registerSemesterBtn.disabled = true;

    });

}


// =====================================================
// DATA PERSISTENCE
// =====================================================

function setupPersistentEditing() {

    const editableElements =
        document.querySelectorAll(
            '[contenteditable="true"]'
        );


    editableElements.forEach(function (element, index) {

        // Give element a storage key if it doesn't have one

        if (!element.dataset.storageKey) {

            const page =
                element.closest(".page");

            const pageName =
                page ? page.id : "general";


            element.dataset.storageKey =
                "HCU_" + pageName + "_field_" + index;

        }


        const storageKey =
            element.dataset.storageKey;


        // Load saved value

        const savedValue =
            localStorage.getItem(storageKey);


        if (savedValue !== null) {

            element.innerHTML = savedValue;

        }


        // Prevent duplicate listeners

        if (
            element.dataset.listenerAttached !==
            "true"
        ) {

            element.addEventListener(
                "input",
                function () {

                    localStorage.setItem(
                        storageKey,
                        element.innerHTML
                    );

                }
            );


            element.dataset.listenerAttached =
                "true";

        }

    });

}


// Initial persistence setup
setupPersistentEditing();



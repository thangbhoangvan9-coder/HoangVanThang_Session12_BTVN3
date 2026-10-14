function monolithicMenu() {
    let choice = "1";

    switch (choice) {
        case "1":
            console.log("Them thue bao");
            break;

        case "2":
            console.log("Hien thi danh sach");
            break;

        case "3":
            console.log("Cap nhat thue bao");
            break;

        case "4":
            console.log("Xoa thue bao");
            break;

        case "5":
            console.log("Tinh tien");
            break;

        default:
            console.log("Lua chon khong hop le");
    }
}

function addSubscription() {
    console.log("Them thue bao");
}

function listSubscriptions() {
    console.log("Hien thi danh sach");
}

function updateSubscription() {
    console.log("Cap nhat thue bao");
}

function deleteSubscription() {
    console.log("Xoa thue bao");
}

function calculateFee() {
    console.log("Tinh tien");
}

function modularMenu() {
    let choice = "1";

    switch (choice) {
        case "1":
            addSubscription();
            break;

        case "2":
            listSubscriptions();
            break;

        case "3":
            updateSubscription();
            break;

        case "4":
            deleteSubscription();
            break;

        case "5":
            calculateFee();
            break;

        default:
            console.log("Lua chon khong hop le");
    }
}


console.log("===== MONOLITHIC MENU =====");
monolithicMenu();

console.log("===== MODULAR MENU =====");
modularMenu();

let cartcount = 0;
function addToCart(){
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
}
document.getElementByTd("search").addEventListener("input", function(){
    let searchText = this.value.toLowerCase();
    let products = document.querySelectorAll(".product");
    products.forEach(function (product){
        let productName= product.querySelection("h3").textContent.toLowerCase();

        if(productName.includes(searchText)){
            product.style.display= "block";
        }else{
            product.style.display = "none";
        }
    });
});
function showAssisstant(){
    document.getElementById("ai-message").textContent = 
    "Welcome! Tell us what product you are looking for.";
}
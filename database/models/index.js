const Attribute = require('./attribute.model'),
    AttributeValue = require('./attribute-value.model'),
    Category = require('./category.model'),
    Brand = require('./brand.model'),
    Product = require('./product.model'),
    Stock = require('./stock.model'),
    User = require('./user.model'),
    Basket = require('./basket.model'),
    BasketProduct = require('./basket-product.model'),
    Order = require('./order.model'),
    OrderProduct = require('./order-product.model'),
    CategoryBrand = require('./category-brand.model'),
    AttributesSet = require('./attributes-set.model'),
    ActiveBasket = require('./active-basket.model')


//  User - Basket O2M
User.hasMany(Basket, {foreignKey: 'userId'})
Basket.belongsTo(User, {targetKey: 'id'})


//  User - Order O2M
User.hasMany(Order, {foreignKey: 'userId'})
Order.belongsTo(User, {targetKey: 'id'})
//

//  Basket - BasketProduct O2M
Basket.hasMany(BasketProduct, {foreignKey: 'basketId'})
BasketProduct.belongsTo(Basket, {targetKey: 'id'})
//

//  Order - OrderProduct O2M
Order.hasMany(OrderProduct, {foreignKey: 'orderId'})
OrderProduct.belongsTo(Order, {targetKey: 'id'})
//

//  Category - Product O2M
Category.hasMany(Product, {foreignKey: 'categoryId'})
Product.belongsTo(Category, {targetKey: 'id'})
//

// Category - Category O2O
Category.hasOne(Category, {foreignKey: 'parentId'})

//  Brand - Product O2M
Brand.hasMany(Product, {foreignKey: 'brandId'})
Product.belongsTo(Brand, {targetKey: 'id'})
//

//  Product - Stock O2O  // better O2M but decide to simplify)
Product.hasOne(Stock, {foreignKey: 'productId'})
Stock.belongsTo(Product, {targetKey: 'id'})
//

//  Product - BasketProduct O2M
Product.hasMany(BasketProduct, {foreignKey: 'productId'})
BasketProduct.belongsTo(Product, {targetKey: 'id'})
//

//  Product - OrderProduct O2M
Product.hasMany(OrderProduct, {foreignKey: 'productId'})
OrderProduct.belongsTo(Product, {targetKey: 'id'})
//

// Product - AttributeValue O2M
Product.hasMany(AttributeValue, {as:'info',foreignKey: 'productId'})
AttributeValue.belongsTo(Product, {targetKey: 'id'})

//Attribute - AttributeValue M2O
Attribute.hasMany(AttributeValue, {foreignKey: 'attributeId'})
AttributeValue.belongsTo(Attribute, {targetKey: 'id'})

//  Category-Brand M2M
Category.belongsToMany(Brand, {through: CategoryBrand})
Brand.belongsToMany(Category, {through: CategoryBrand})
//

// Category - Attribute M2M
Category.belongsToMany(Attribute, {through: AttributesSet})
Attribute.belongsToMany(Category, {through: AttributesSet})

// User - ActiveBasket O2O
User.hasOne(ActiveBasket)
ActiveBasket.belongsTo(User)



module.exports = {
    Attribute,
    AttributeValue,
    Category,
    Brand,
    Product,
    Stock,
    User,
    Basket,
    BasketProduct,
    Order,
    OrderProduct,
    CategoryBrand,
    AttributesSet,
    ActiveBasket,
}
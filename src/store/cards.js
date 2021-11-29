export default {
    actions: {
    },
    mutations: {
        sum(state,price) {
            state.totalAmount += price
        },
        countDic(state,index) {
            if (state.productBasket[index].count > 1) {
                state.productBasket[index].count--
            } else {
                state.productBasket.splice(index, 1)
            }
        },
        countInc(state,index) {
            state.productBasket[index].count++
        },
        removeProductBasket(state, index) {
            state.productBasket.splice(index, 1)
        },
        emptyTrash(state) {
            state.productBasket = []
        },
        checkSizePizza(state, payload) {
            state.cards[payload[1]].sizePizza = payload[0]
        },
        borderPizza(state,payload) {
            state.cards[payload[1]].typePizza = payload[0]
        },
        addProductBasket(state, index) {
            state.productBasket.push(state.cards[index]);
        }
    },
    state: {
        cards: [
            {
                namePizza: 'Греческая',
                ingredientsPizza: [
                    'Фирменный томатный соус',
                    'Моцарелла',
                    'мягкий молодой сыр',
                    'маслины',
                    'лук',
                    'сочные томаты',
                    'острый халапеньо и орегано',
                ],
                typePizza: 'Традиционное',
                sizePizza: 23,
                pricePizza: 365,
                count: 1,
            },
            {
                namePizza: 'Греческая',
                ingredientsPizza: [
                    'Фирменный томатный соус',
                    'Моцарелла',
                    'мягкий молодой сыр',
                    'маслины',
                    'лук',
                    'сочные томаты',
                    'острый халапеньо и орегано',
                ],
                typePizza: 'Традиционное',
                sizePizza: 23,
                pricePizza: 365,
                count: 1,

            },
            {
                namePizza: 'Греческая',
                ingredientsPizza: [
                    'Фирменный томатный соус',
                    'Моцарелла',
                    'мягкий молодой сыр',
                    'маслины',
                    'лук',
                    'сочные томаты',
                    'острый халапеньо и орегано',
                ],
                typePizza: 'Традиционное',
                sizePizza: 23,
                pricePizza: 365,
                count: 1,

            },
            {
                namePizza: 'Греческая',
                ingredientsPizza: [
                    'Фирменный томатный соус',
                    'Моцарелла',
                    'мягкий молодой сыр',
                    'маслины',
                    'лук',
                    'сочные томаты',
                    'острый халапеньо и орегано',
                ],
                typePizza: 'Традиционное',
                sizePizza: 23,
                pricePizza: 365,
                count: 1,

            },
            {
                namePizza: 'Греческая',
                ingredientsPizza: [
                    'Фирменный томатный соус',
                    'Моцарелла',
                    'мягкий молодой сыр',
                    'маслины',
                    'лук',
                    'сочные томаты',
                    'острый халапеньо и орегано',
                ],
                typePizza: 'Традиционное',
                sizePizza: 23,
                pricePizza: 365,
                count: 1,
            }
           
        ],
        productBasket: [],
        totalAmount: 0,
    },
    getters: {
        CARDS_PRODUCT(state) {
            return state.cards
        },
        PRODUCT_BASKET(state) {
            return state.productBasket
        },
        TOTAL_AMOUNT(state) {
            return state.totalAmount
        },
    }
}
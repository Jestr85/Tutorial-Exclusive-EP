async function createDeck() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const data = await response.json()
    return data.deck_id
}

function searchCards(cards, rank, suit) {
    return cards.filter(card => card.value === rank && card.suit === suit)
}
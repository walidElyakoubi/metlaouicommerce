$(document).ready(function () {
  function renderVendors(filter) {
    $('#vendor-list').empty();
    vendors.forEach(v => {
      if (filter === 'tous' || v.type === filter) {
        $('#vendor-list').append(`
          <div class="vendor">
            <img src="${v.image}" alt="${v.name}">
            <h3>${v.name}</h3>
            <p>${v.description}</p>
            <p>📍 ${v.address}</p>
            <a href="tel:${v.phone}">📞 Appeler</a> |
            <a href="https://wa.me/${v.phone.replace('+', '')}?text=Bonjour, je suis intéressé par vos services." target="_blank">💬 WhatsApp</a>
          </div>
        `);
      }
    });
  }

  renderVendors('tous');

  $('button[data-category]').on('click', function () {
    const category = $(this).data('category');
    renderVendors(category);
  });
});

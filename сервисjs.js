let clients = [
  { id:"C001", fullName:"Петров Иван", phone:"+7 (900) 111-11-11", email:"petrov@mail.ru", status:"active", registeredAt:"2023-01-15T10:30:00" },
  { id:"C002", fullName:"Сидорова Мария", phone:"+7 (900) 222-22-22", email:"sidorova@mail.ru", status:"vip", registeredAt:"2022-11-03T14:15:00" },
  { id:"C003", fullName:"Кузнецов Алексей", phone:"+7 (900) 333-33-33", email:"kuznetsov@mail.ru", status:"active", registeredAt:"2023-03-20T09:00:00" },
  { id:"C004", fullName:"Смирнова Ольга", phone:"+7 (900) 444-44-44", email:"smirnova@mail.ru", status:"inactive", registeredAt:"2021-06-10T16:45:00" },
  { id:"C005", fullName:"Волков Дмитрий", phone:"+7 (900) 555-55-55", email:"volkov@mail.ru", status:"active", registeredAt:"2023-05-12T11:20:00" },
  { id:"C006", fullName:"Морозова Елена", phone:"+7 (900) 666-66-66", email:"morozova@mail.ru", status:"vip", registeredAt:"2022-02-18T13:00:00" },
  { id:"C007", fullName:"Новиков Сергей", phone:"+7 (900) 777-77-77", email:"novikov@mail.ru", status:"active", registeredAt:"2023-07-01T08:30:00" },
  { id:"C008", fullName:"Федорова Анна", phone:"+7 (900) 888-88-88", email:"fedorova@mail.ru", status:"active", registeredAt:"2023-08-14T15:10:00" },
  { id:"C009", fullName:"Орлов Павел", phone:"+7 (900) 999-99-99", email:"orlov@mail.ru", status:"inactive", registeredAt:"2020-12-05T12:00:00" },
  { id:"C010", fullName:"Зайцева Татьяна", phone:"+7 (901) 100-10-10", email:"zaytseva@mail.ru", status:"active", registeredAt:"2023-09-22T10:00:00" },
  { id:"C011", fullName:"Соколов Артем", phone:"+7 (901) 200-20-20", email:"sokolov@mail.ru", status:"active", registeredAt:"2023-10-01T09:45:00" },
  { id:"C012", fullName:"Павлова Виктория", phone:"+7 (901) 300-30-30", email:"pavlova@mail.ru", status:"vip", registeredAt:"2021-09-30T14:00:00" },
  { id:"C013", fullName:"Белов Николай", phone:"+7 (901) 400-40-40", email:"belov@mail.ru", status:"active", registeredAt:"2023-11-11T11:11:00" },
  { id:"C014", fullName:"Комарова Ирина", phone:"+7 (901) 500-50-50", email:"komarova@mail.ru", status:"active", registeredAt:"2023-12-01T16:30:00" },
  { id:"C015", fullName:"Лебедев Максим", phone:"+7 (901) 600-60-60", email:"lebedev@mail.ru", status:"active", registeredAt:"2024-01-10T08:00:00" }
];

const cars = [
  { id:"A001", brand:"Toyota", model:"Camry", licensePlate:"А123ВС77", status:"in_service" },
  { id:"A002", brand:"Kia", model:"Rio", licensePlate:"В456ЕК77", status:"ready" },
  { id:"A003", brand:"Volkswagen", model:"Polo", licensePlate:"С789ОР77", status:"waiting" },
  { id:"A004", brand:"Hyundai", model:"Solaris", licensePlate:"Е321КХ77", status:"archived" },
  { id:"A005", brand:"Renault", model:"Logan", licensePlate:"К654МН77", status:"in_service" },
  { id:"A006", brand:"BMW", model:"3 Series", licensePlate:"М987ТУ77", status:"ready" },
  { id:"A007", brand:"Lada", model:"Vesta", licensePlate:"Н159ФХ77", status:"in_service" },
  { id:"A008", brand:"Skoda", model:"Octavia", licensePlate:"Р753ЦЧ77", status:"waiting" },
  { id:"A009", brand:"Nissan", model:"Qashqai", licensePlate:"С321ШЩ77", status:"archived" },
  { id:"A010", brand:"Mazda", model:"CX-5", licensePlate:"Т654ЬЯ77", status:"in_service" },
  { id:"A011", brand:"Ford", model:"Focus", licensePlate:"У987ЭЮ77", status:"ready" },
  { id:"A012", brand:"Audi", model:"A4", licensePlate:"Ф246ГД77", status:"waiting" },
  { id:"A013", brand:"Chevrolet", model:"Cruze", licensePlate:"Х159ЖЗ77", status:"archived" },
  { id:"A014", brand:"Opel", model:"Astra", licensePlate:"Ц753ИК77", status:"in_service" },
  { id:"A015", brand:"Peugeot", model:"308", licensePlate:"Ч852ЛМ77", status:"ready" }
];

const orders = [
  { id:"O001", title:"Замена масла Toyota", status:"in_progress", masterName:"Сергей", price:3500 },
  { id:"O002", title:"Замена ГРМ Kia", status:"done", masterName:"Петр", price:8000 },
  { id:"O003", title:"Диагностика VW", status:"new", masterName:"Андрей", price:1500 },
  { id:"O004", title:"Ремонт двигателя Renault", status:"in_progress", masterName:"Игорь", price:45000 },
  { id:"O005", title:"Плановое ТО BMW", status:"done", masterName:"Сергей", price:12000 },
  { id:"O006", title:"Замена амортизаторов Lada", status:"in_progress", masterName:"Андрей", price:9500 },
  { id:"O007", title:"Диагностика Skoda", status:"new", masterName:"Петр", price:2000 },
  { id:"O008", title:"Замена тормозов Mazda", status:"in_progress", masterName:"Игорь", price:7500 },
  { id:"O009", title:"Замена масла Ford", status:"done", masterName:"Сергей", price:3200 },
  { id:"O010", title:"Диагностика Audi", status:"new", masterName:"Андрей", price:2500 },
  { id:"O011", title:"Ремонт КПП Opel", status:"in_progress", masterName:"Игорь", price:25000 },
  { id:"O012", title:"Замена ГРМ Peugeot", status:"done", masterName:"Петр", price:9000 },
  { id:"O013", title:"Кузовной ремонт Chevrolet", status:"done", masterName:"Андрей", price:15000 },
  { id:"O014", title:"ТО Hyundai", status:"canceled", masterName:"Сергей", price:4000 },
  { id:"O015", title:"Замена АКБ Nissan", status:"done", masterName:"Петр", price:5500 }
];

function el(tag, className, text) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text !== undefined) e.textContent = String(text);
  return e;
}

function statusLabel(s) {
  const map = { active:"Активен", inactive:"Неактивен", vip:"VIP", in_service:"В работе", waiting:"Ожидает", ready:"Готов", archived:"Архив", new:"Новый", in_progress:"В работе", done:"Выполнен", canceled:"Отменён" };
  return map[s] || s;
}

function makeBadge(status) { 
  return el('span', 'badge badge-' + status.replace(/_/g, '-'), statusLabel(status)); 
}

function renderCards(container, entity, items) {
  container.innerHTML = '';
  if (items.length === 0) {
    container.innerHTML = '<li class="empty-state">Ничего не найдено</li>';
    return;
  }
  const frag = document.createDocumentFragment();
  items.forEach(item => {
    const card = el('article', 'card');
    const header = el('header', 'card-header');
    header.appendChild(el('span', 'card-id', item.id));
    const title = entity === 'clients' ? item.fullName 
                : entity === 'cars' ? `${item.brand} ${item.model}` 
                : item.title;
    header.appendChild(el('h3', 'card-title', title));
    header.appendChild(makeBadge(item.status));
    card.appendChild(header);
    
    const body = el('div', 'card-body');
    if (entity === 'clients') {
      body.appendChild(el('p', 'card-text', 'Тел: ' + item.phone));
      body.appendChild(el('p', 'card-text', 'Email: ' + item.email));
    } else if (entity === 'cars') {
      body.appendChild(el('p', 'card-text', 'Госномер: ' + item.licensePlate));
    } else {
      body.appendChild(el('p', 'card-text', 'Мастер: ' + item.masterName));
      body.appendChild(el('p', 'card-text', 'Цена: ' + item.price + ' ₽'));
    }
    card.appendChild(body);
    frag.appendChild(card);
  });
  container.appendChild(frag);
}

function renderClientsTable(data) {
  const tbody = document.getElementById('clients-table-body');
  tbody.innerHTML = '';
  if (data.length === 0) { tbody.innerHTML = '<tr><td colspan="5" class="empty-state">Нет клиентов</td></tr>'; return; }
  data.forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td data-label="ID">${c.id}</td><td data-label="ФИО">${c.fullName}</td><td data-label="Тел">${c.phone}</td><td data-label="Email">${c.email}</td><td data-label="Статус">${makeBadge(c.status).outerHTML}</td>`;
    tbody.appendChild(tr);
  });
}

function renderCarsTable(data) {
  const tbody = document.getElementById('cars-table-body');
  tbody.innerHTML = '';
  if (data.length === 0) { tbody.innerHTML = '<tr><td colspan="4" class="empty-state">Нет машин</td></tr>'; return; }
  data.forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td data-label="ID">${c.id}</td><td data-label="Марка">${c.brand} ${c.model}</td><td data-label="Госномер">${c.licensePlate}</td><td data-label="Статус">${makeBadge(c.status).outerHTML}</td>`;
    tbody.appendChild(tr);
  });
}

function renderOrdersTable(data) {
  const tbody = document.getElementById('orders-table-body');
  tbody.innerHTML = '';
  if (data.length === 0) { tbody.innerHTML = '<tr><td colspan="5" class="empty-state">Нет заказов</td></tr>'; return; }
  data.forEach(o => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td data-label="ID">${o.id}</td><td data-label="Заказ">${o.title}</td><td data-label="Мастер">${o.masterName}</td><td data-label="Статус">${makeBadge(o.status).outerHTML}</td><td data-label="Цена">${o.price} ₽</td>`;
    tbody.appendChild(tr);
  });
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const isActive = btn.dataset.tab === tabName;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive);
    btn.tabIndex = isActive ? 0 : -1;
  });
  document.querySelectorAll('.data-section').forEach(section => {
    section.hidden = section.id !== tabName;
  });
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('menu-overlay');
  sidebar.classList.remove('is-open');
  document.getElementById('menu-toggle').classList.remove('is-open');
  overlay.classList.remove('is-active');
  overlay.hidden = true;
}

function applyFilters() {
  const search = document.getElementById('search-input').value.toLowerCase();
  const status = document.getElementById('status-select').value;
  const view = document.querySelector('input[name="view"]:checked').value;
  const checkedEntities = Array.from(document.querySelectorAll('input[name="entity"]:checked')).map(cb => cb.value);

  const filteredClients = clients.filter(c => (!status || c.status === status) && c.fullName.toLowerCase().includes(search));
  document.getElementById('clients').hidden = !checkedEntities.includes('clients');
  if (view === 'table') {
    document.getElementById('clients-table-wrapper').classList.remove('is-hidden');
    document.getElementById('clients-list').classList.add('is-hidden');
    renderClientsTable(filteredClients);
  } else {
    document.getElementById('clients-table-wrapper').classList.add('is-hidden');
    document.getElementById('clients-list').classList.remove('is-hidden');
    renderCards(document.getElementById('clients-list'), 'clients', filteredClients);
  }

  const filteredCars = cars.filter(c => (!status || c.status === status) && (c.brand + ' ' + c.model).toLowerCase().includes(search));
  document.getElementById('cars').hidden = !checkedEntities.includes('cars');
  if (view === 'table') {
    document.getElementById('cars-table-wrapper').classList.remove('is-hidden');
    document.getElementById('cars-list').classList.add('is-hidden');
    renderCarsTable(filteredCars);
  } else {
    document.getElementById('cars-table-wrapper').classList.add('is-hidden');
    document.getElementById('cars-list').classList.remove('is-hidden');
    renderCards(document.getElementById('cars-list'), 'cars', filteredCars);
  }

  const filteredOrders = orders.filter(o => (!status || o.status === status) && o.title.toLowerCase().includes(search));
  document.getElementById('orders').hidden = !checkedEntities.includes('orders');
  if (view === 'table') {
    document.getElementById('orders-table-wrapper').classList.remove('is-hidden');
    document.getElementById('orders-list').classList.add('is-hidden');
    renderOrdersTable(filteredOrders);
  } else {
    document.getElementById('orders-table-wrapper').classList.add('is-hidden');
    document.getElementById('orders-list').classList.remove('is-hidden');
    renderCards(document.getElementById('orders-list'), 'orders', filteredOrders);
  }
}

function updateStats() {
  document.getElementById('stat-in-progress').textContent = orders.filter(o => o.status === 'in_progress').length;
  document.getElementById('stat-done').textContent = orders.filter(o => o.status === 'done').length;
}

function validateField(input, errorEl) {
  let isValid = true, message = '';
  if (!input.value.trim()) { isValid = false; message = 'Обязательно'; }
  else if (input.type === 'email' && !/^\S+@\S+\.\S+$/.test(input.value)) { isValid = false; message = 'Неверный email'; }
  if (!isValid) { input.classList.add('invalid'); errorEl.textContent = message; }
  else { input.classList.remove('invalid'); errorEl.textContent = ''; }
  return isValid;
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = el('div', 'toast', message);
  toast.style.borderLeftColor = type === 'error' ? 'var(--error)' : 'var(--success)';
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('skeleton-loader').style.display = 'none';
  document.getElementById('data-container').hidden = false;

  document.querySelectorAll('.tab-btn').forEach(btn => btn.addEventListener('click', () => switchTab(btn.dataset.tab)));
  document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', (e) => { e.preventDefault(); switchTab(link.dataset.target); }));

  document.getElementById('search-input').addEventListener('input', applyFilters);
  document.getElementById('status-select').addEventListener('change', applyFilters);
  document.querySelectorAll('input[name="entity"], input[name="view"]').forEach(input => input.addEventListener('change', applyFilters));

  document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('search-input').value = '';
    document.getElementById('status-select').value = '';
    document.querySelectorAll('input[name="entity"]').forEach(cb => cb.checked = true);
    document.querySelector('input[name="view"][value="table"]').checked = true;
    applyFilters();
  });

  const form = document.getElementById('add-client-form');
  form.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', () => validateField(input, document.getElementById('error-' + input.id.split('-')[1])));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formValid = true;
    form.querySelectorAll('input').forEach(input => {
      if (!validateField(input, document.getElementById('error-' + input.id.split('-')[1]))) formValid = false;
    });
    if (formValid) {
      clients.unshift({ id: 'C' + Math.floor(Math.random() * 1000), fullName: document.getElementById('client-name').value, phone: document.getElementById('client-phone').value, email: document.getElementById('client-email').value, status: 'active', registeredAt: new Date().toISOString() });
      applyFilters();
      closeModal();
      showToast('Клиент добавлен!', 'success');
      form.reset();
    }
  });

  document.getElementById('open-modal-btn').addEventListener('click', () => {
    document.getElementById('modal-overlay').hidden = false;
    document.getElementById('client-name').focus();
  });

  const closeModal = () => {
    document.getElementById('modal-overlay').hidden = true;
    form.reset();
    document.querySelectorAll('.error-text').forEach(el => el.textContent = '');
    document.querySelectorAll('.form-group input').forEach(el => el.classList.remove('invalid'));
  };
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-cancel').addEventListener('click', closeModal);

  const themeSelect = document.getElementById('theme-select');
  themeSelect.value = document.documentElement.getAttribute('data-theme');
  themeSelect.addEventListener('change', (e) => {
    document.documentElement.setAttribute('data-theme', e.target.value);
    localStorage.setItem('theme', e.target.value);
  });

  document.getElementById('menu-toggle').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('menu-overlay');
    const isOpen = sidebar.classList.toggle('is-open');
    document.getElementById('menu-toggle').classList.toggle('is-open');
    overlay.classList.toggle('is-active');
    overlay.hidden = !isOpen;
  });

  applyFilters();
  updateStats();
});
# 📧 Configuração de Envio de Email

O formulário de contato está preparado para funcionar com diferentes serviços. Atualmente está em **modo simulação**.

## 🎯 Opções Disponíveis

### 1. 📮 **EmailJS (Recomendado - Gratuito)**

**Vantagens:**
- ✅ Totalmente gratuito até 200 emails/mês
- ✅ Fácil configuração
- ✅ Funciona no frontend
- ✅ Sem necessidade de backend

**Como configurar:**

1. **Cadastre-se em:** https://www.emailjs.com/
2. **Crie um serviço de email** (Gmail, Outlook, etc.)
3. **Crie um template de email**
4. **Pegue suas chaves:**
   - Public Key
   - Service ID  
   - Template ID

5. **No arquivo `script.js`, descomente e configure:**
```javascript
// Descomente estas linhas (linhas ~36-50)
emailjs.init("SUA_PUBLIC_KEY");

emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", {
    from_name: name,
    from_email: email,
    message: message,
    to_email: "moiseisfelipi@gmail.com"
})
```

6. **Comente a seção "TEMPORARY" (linhas ~89-96)**

### 2. 📨 **Formspree (Simples)**

**Vantagens:**
- ✅ Gratuito até 50 envios/mês
- ✅ Configuração super simples
- ✅ Sem JavaScript necessário

**Como configurar:**

1. **Cadastre-se em:** https://formspree.io/
2. **Crie um novo form**
3. **Pegue seu Form ID**
4. **No arquivo `script.js`, descomente e configure:**
```javascript
// Descomente as linhas ~52-72
fetch('https://formspree.io/f/SEU_FORM_ID', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: name,
        email: email,
        message: message
    })
})
```

### 3. 🌐 **Netlify Forms (Se hospedar no Netlify)**

**Vantagens:**
- ✅ Integrado ao Netlify
- ✅ Gratuito até 100 envios/mês
- ✅ Zero configuração

**Como configurar:**

1. **Adicione ao formulário HTML:**
```html
<form class="contact-form" name="contact" netlify>
    <input type="hidden" name="form-name" value="contact">
    <!-- resto do formulário -->
</form>
```

2. **No `script.js`, descomente as linhas ~74-87**

## 🚀 Implementação Rápida com EmailJS

### Passo a Passo Detalhado:

1. **Acesse:** https://www.emailjs.com/
2. **Clique em "Sign Up"**
3. **Após login, vá em "Email Services"**
4. **Clique "Add New Service"**
5. **Escolha Gmail/Outlook**
6. **Configure com seu email**
7. **Vá em "Email Templates"**
8. **Clique "Create New Template"**
9. **Use este template:**

```
Subject: 📧 Nova mensagem do portfólio - {{from_name}}

Olá Moisés!

Você recebeu uma nova mensagem através do seu portfólio:

📝 Nome: {{from_name}}
📧 Email: {{from_email}}
💬 Mensagem: {{message}}

---
Enviado automaticamente do seu portfólio
```

10. **Pegue as chaves em "Account" > "API Keys"**
11. **Substitua no código:**

```javascript
// Suas chaves do EmailJS
emailjs.init("sua_public_key_aqui");

emailjs.send("seu_service_id", "seu_template_id", {
    from_name: name,
    from_email: email,
    message: message,
    to_email: "moiseisfelipi@gmail.com"
})
```

## 🔧 Teste Local

Para testar localmente, você pode usar um servidor local simples:

```bash
# Com Python
python -m http.server 8000

# Com Node.js (se tiver live-server instalado)
npx live-server

# Ou simplesmente abrir o HTML no navegador
```

## 🛡️ Segurança

- ✅ As chaves do EmailJS são públicas por design
- ✅ Configure domínios permitidos no painel do EmailJS
- ✅ Use rate limiting se necessário
- ✅ Monitore o uso para evitar spam

## 📱 Status Atual

- 🟡 **Formulário:** Funcional (modo simulação)
- 🔴 **Envio real:** Não configurado
- ✅ **Validação:** Implementada
- ✅ **Interface:** Completa

Para ativar o envio real, escolha uma das opções acima e siga as instruções! 🚀
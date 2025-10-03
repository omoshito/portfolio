# 🎯 Configuração Final do EmailJS

Ótimo! Você já criou o EmailJS. Agora só faltam **2 passos simples** para finalizar:

## ✅ Já configurado:
- ✅ Service ID: `service_j65yx6b`
- ✅ Código JavaScript preparado
- ✅ EmailJS SDK carregado

## 🔧 Próximos passos:

### 1. 🔑 **Pegar sua Public Key**

1. Vá em: https://dashboard.emailjs.com/admin/account
2. Na seção **API Keys**, copie sua **Public Key**
3. No arquivo `script.js` (linha ~413), substitua:
   ```javascript
   emailjs.init("SUA_PUBLIC_KEY_AQUI");
   ```
   Por:
   ```javascript
   emailjs.init("sua_public_key_real");
   ```

### 2. 📧 **Criar um Template de Email**

1. Vá em: https://dashboard.emailjs.com/admin/templates
2. Clique em **"Create New Template"**
3. Configure assim:

**Template Settings:**
- **Template Name:** `portfolio_contact`
- **Subject:** `📧 Nova mensagem do portfólio - {{from_name}}`

**Template Content:**
```
Olá Moisés!

Você recebeu uma nova mensagem através do seu portfólio:

👤 Nome: {{from_name}}
📧 Email: {{from_email}}

💬 Mensagem:
{{message}}

---
Enviado automaticamente do seu portfólio
Data: {{current_date}}
```

4. **Salve o template** e copie o **Template ID**
5. No arquivo `script.js` (linha ~415), substitua:
   ```javascript
   emailjs.send("service_j65yx6b", "SEU_TEMPLATE_ID", {
   ```
   Por:
   ```javascript
   emailjs.send("service_j65yx6b", "seu_template_id_real", {
   ```

## 🎯 **Exemplo de configuração final:**

```javascript
// Deve ficar assim:
emailjs.init("user_1a2b3c4d5e6f7g8h"); // Sua public key
        
emailjs.send("service_j65yx6b", "template_9x8y7z6w", {
    from_name: name,
    from_email: email,
    message: message,
    to_email: "moiseisfelipi@gmail.com"
})
```

## 🧪 **Como testar:**

1. Abra seu `index.html` no navegador
2. Preencha o formulário de contato
3. Clique em "Enviar Mensagem"
4. ✅ Se aparecer "Mensagem enviada com sucesso" = funcionou!
5. ❌ Se der erro, abra o console (F12) para ver detalhes

## 🔍 **Troubleshooting:**

### Erro: "Public Key not found"
- Verifique se a Public Key está correta
- Certifique-se de que não tem espaços extras

### Erro: "Template not found"
- Verifique se o Template ID está correto
- Certifique-se de que o template foi salvo

### Erro: "Service not found"
- O Service ID `service_j65yx6b` deve estar correto
- Verifique se o serviço está ativo no painel

## 📱 **Testando localmente:**

Se estiver testando localmente, use:
```bash
# Python
python -m http.server 8000

# Node.js
npx live-server
```

Acesse: `http://localhost:8000`

## 🎉 **Quando funcionar:**

Você receberá emails reais no seu Gmail (`moiseisfelipi@gmail.com`) sempre que alguém enviar mensagem pelo formulário!

**Tempo estimado para configurar:** 5 minutos ⏱️

---

💡 **Dica:** Mantenha o console aberto (F12) durante os testes para ver logs de sucesso/erro!
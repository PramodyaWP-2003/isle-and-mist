
import {
  validateContactForm,
} from './contactValidation'

export async function submitContactInquiry(
  formData
) {
  const errors =
    validateContactForm(formData)

  if (Object.keys(errors).length > 0) {
    throw new Error(
      'Please correct the form information.'
    )
  }

  // Simulate a short submission delay.

  await new Promise((resolve) => {
    setTimeout(resolve, 800)
  })

  // Generate a demonstration reference.

  const uniqueId =
    globalThis.crypto?.randomUUID?.() ||
    `${Date.now()}-${Math.random()
      .toString(36)
      .slice(2, 8)}`

  const reference =
    `IM-${uniqueId.toUpperCase()}`

  // Return a demonstration receipt.
  // No server request or permanent storage.

  return {
    success: true,
    reference,
    name: formData.name.trim(),
    submittedAt: new Date().toISOString(),
    simulated: true,
  }
}

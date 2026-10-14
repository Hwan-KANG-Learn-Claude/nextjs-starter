// 입력 폼 페이지 (주소: /form)
// 입력값을 확인하고 메시지를 보여 줘야 해서, 브라우저에서 동작하는 "use client"를 붙였어요.
// 실제로 어딘가에 보내지는 않아요. 화면 안에서만 동작하는 연습용 폼이에요.
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TryIt } from "@/components/try-it";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = { name: "", email: "", message: "" };

// 입력값을 검사해서, 틀린 칸마다 안내 문구를 돌려줘요.
function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim() === "") {
    errors.name = "이름을 입력해 주세요.";
  }

  // "글자@글자.글자" 모양인지 확인해요.
  if (values.email.trim() === "") {
    errors.email = "이메일을 입력해 주세요.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "이메일 모양이 아니에요. 예: hello@example.com";
  }

  if (values.message.trim().length < 5) {
    errors.message = "남길 말을 5글자 이상 적어 주세요.";
  }

  return errors;
}

export default function FormPage() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sentName, setSentName] = useState<string | null>(null);

  // 칸에 글자를 입력할 때마다 values를 새로 바꿔요.
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  // "보내기" 버튼을 누르면 실행돼요.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // 페이지가 새로고침되지 않게 막아요.

    const newErrors = validate(values);
    setErrors(newErrors);

    // 틀린 칸이 하나도 없을 때만 감사 메시지를 보여 줘요.
    if (Object.keys(newErrors).length === 0) {
      setSentName(values.name.trim());
      setValues(emptyValues);
    }
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-bold">입력 폼</h1>
      <p className="mt-2 text-muted-foreground">
        빈칸으로 두거나 이메일을 잘못 적고 보내기를 눌러 보세요.
      </p>

      {sentName && (
        <p
          role="status"
          className="mt-6 rounded-lg bg-primary/10 p-4 font-medium text-primary"
        >
          {sentName}님, 고마워요! 메시지를 잘 받았어요.
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">남길 말</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        <Button type="submit" className="h-11 w-full">
          보내기
        </Button>
      </form>

      <TryIt>
        <p>
          <b>전화번호 칸</b>을 추가해 보세요. 순서는 이렇게 해요.
        </p>
        <p>
          ① <code>FormValues</code>와 <code>emptyValues</code>에 <code>phone</code>을 넣어요.
        </p>
        <p>
          ② 이메일 칸 묶음(<code>div</code>)을 복사해서 이름을 phone으로 바꿔요.
        </p>
        <p>
          ③ <code>validate</code>에 빈칸 검사를 하나 더 넣어요.
        </p>
      </TryIt>
    </div>
  );
}

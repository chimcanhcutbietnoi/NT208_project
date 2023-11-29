import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import classes from './registerPage.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function RegisterPage() {
  const auth = useAuth();
  const { user } = auth;
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const returnUrl = params.get('returnUrl');

  useEffect(() => {
    if (!user) return;
    returnUrl ? navigate(returnUrl) : navigate('/');
  }, [user]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submit = async data => {
    await auth.register(data);
  };

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title="Đăng kí" />
        <form onSubmit={handleSubmit(submit)} noValidate>
          <Input
            type="text"
            label="Tên người dùng"
            {...register('name', {
              required: true,
              minLength: 5,
            })}
            error={errors.name}
          />

          <Input
            type="email"
            label="Email"
            {...register('email', {
              required: true,
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                message: 'Email Is Not Valid',
              },
            })}
            error={errors.email}
          />

          <Input
            type="password"
            label="Mật khẩu"
            {...register('password', {
              required: true,
              minLength: 5,
            })}
            error={errors.password}
          />

          <Input
            type="password"
            label="Nhập lại mật khẩu"
            {...register('confirmPassword', {
              required: true,
              validate: value =>
                value !== getValues('password')
                  ? 'Passwords Do No Match'
                  : true,
            })}
            error={errors.confirmPassword}
          />

          <Input
            type="text"
            label="Địa chỉ"
            {...register('address', {
              required: true,
              minLength: 10,
            })}
            error={errors.address}
          />

          <Button type="submit" text="Đăng kí" />

          <div className={classes.login}>
            Bạn đã có tài khoản?&nbsp;
            <Link to={`/login${returnUrl ? '?returnUrl=' + returnUrl : ''}`}>
              Đăng nhập ở đây nè 🚩
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

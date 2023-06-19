import useLoginModal from "@/hooks/useModalLogin";
import { useCallback, useState } from "react";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  return <div>LoginModal</div>;
};

export default LoginModal;

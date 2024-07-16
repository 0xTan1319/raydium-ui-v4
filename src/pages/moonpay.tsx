import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { WalletReadyState } from '@solana/wallet-adapter-base'
import RaydiumLogo from '@/icons/RaydiumLogo'
import MoonPay from '@/icons/misc/MoonPay'
import Plus from '@/icons/misc/Plus'
import Phantom from '@/icons/misc/Phantom'
import SolGrey from '@/icons/misc/SolGrey'
import Cart from '@/icons/misc/Cart'
import WalletOnramp from '@/components/SolWallet/WalletOnramp'
import { useAppStore } from '@/store'

export default function MoonpayPage() {
  const { t } = useTranslation()
  const isMobile = useAppStore((s) => s.isMobile)
  const phantomWallet = new PhantomWalletAdapter()
  const isPhantomInstalled = phantomWallet.readyState !== WalletReadyState.NotDetected

  return (
    <Flex
      w="100%"
      h="100%"
      background="url(/images/moonpay-gradient.png) no-repeat"
      backgroundColor="#0f1018"
      backgroundPosition="top center"
      _before={{
        content: `""`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.4,
        bgImage: 'linear-gradient(153deg, rgba(118, 120, 136, 0.48) 3.89%, rgba(118, 120, 136, 0) 66.42%)'
      }}
    >
      <Flex
        w="100%"
        minHeight="100vh"
        background="linear-gradient(165deg, rgba(118, 120, 136, 0.19) 3.89%, rgba(118, 120, 136, 0) 66.42%)"
        backgroundSize="100% 890px"
        backgroundRepeat=" no-repeat"
        alignItems="center"
        justifyContent="center"
      >
        <Box textAlign="center" {...(isMobile ? { display: 'flex', flexDirection: 'column', px: '6' } : {})}>
          <Flex alignItems="center" justifyContent="center" gap={4} flexDirection="row">
            <Flex
              w={{ base: '64px', md: '104px' }}
              h={{ base: '64px', md: '104px' }}
              minWidth={{ base: '64px', md: '104px' }}
              p={{ base: '10px', md: '16px' }}
              borderRadius={{ base: '15px', md: '24px' }}
              bgColor="rgba(0, 0, 0, 0.32)"
              alignItems="center"
              justifyContent="center"
            >
              <RaydiumLogo width="64" height="64" />
            </Flex>
            <Plus width="25px" height="25px" color="#8d93b7" />
            <Flex
              w={{ base: '64px', md: '104px' }}
              h={{ base: '64px', md: '104px' }}
              minWidth={{ base: '64px', md: '104px' }}
              p={{ base: '10px', md: '16px' }}
              borderRadius={{ base: '15px', md: '24px' }}
              bgColor="rgba(0, 0, 0, 0.32)"
              alignItems="center"
              justifyContent="center"
            >
              <MoonPay width="100%" height="100%" color="#7715f5" />
            </Flex>
          </Flex>
          <Text as="h1" fontSize={{ base: '24px', md: '40px' }} color="white" mt={6} mb={8}>
            {t('moonpay.deposit_using')}
            <Text as="span" fontWeight="semibold">
              {t('moonpay.title')}
            </Text>
          </Text>
          <Box {...(isMobile ? { mt: '8', order: 2 } : {})}>
            {isPhantomInstalled ? <WalletOnramp /> : <Text fontSize="sm">{t('moonpay.phantom_wallet_not_installed')}</Text>}
          </Box>
          <Flex
            maxW="728px"
            margin="0 auto"
            borderTop="1px solid rgba(255, 255, 255, 0.1)"
            pt={6}
            position="absolute"
            left="50%"
            bottom="10vh"
            mb="88px"
            transform="translateX(-50%)"
            color="#b5b7da"
            textAlign="left"
            {...(!isMobile
              ? { justifyContent: 'space-between', gap: '80px', direction: 'row' }
              : {
                  position: 'static',
                  width: '100%',
                  marginBottom: '0',
                  transform: 'none',
                  order: '1',
                  marginTop: '6vh',
                  gap: '4',
                  direction: 'column'
                })}
          >
            <VStack flex="1" alignItems="flex-start" gap={0}>
              <Phantom width="24px" height="24px" color="#898eff" />
              <Text fontSize={{ base: 'sm', md: 'md' }} color="white" fontWeight="semibold" mt="8px" mb="4px" textTransform="uppercase">
                {t('moonpay.step1')}
              </Text>
              <Text fontSize="sm">{t('moonpay.step_text1')}</Text>
            </VStack>
            <VStack flex="1" alignItems="flex-start" gap={0}>
              <SolGrey width="24px" height="24px" color="#898eff" />
              <Text fontSize={{ base: 'sm', md: 'md' }} color="white" fontWeight="semibold" mt="8px" mb="4px" textTransform="uppercase">
                {t('moonpay.step2')}
              </Text>
              <Text fontSize="sm">{t('moonpay.step_text2')}</Text>
            </VStack>
            <VStack flex="1" alignItems="flex-start" gap={0}>
              <Cart width="24px" height="24px" color="#898eff" />
              <Text fontSize={{ base: 'sm', md: 'md' }} color="white" fontWeight="semibold" mt="8px" mb="4px" textTransform="uppercase">
                {t('moonpay.step3')}
              </Text>
              <Text fontSize="sm">{t('moonpay.step_text3')}</Text>
            </VStack>
          </Flex>
          <Flex
            width="100%"
            justifyContent="center"
            alignItems="center"
            gap="3"
            mt={8}
            {...(!isMobile ? { margin: '0', position: 'absolute', bottom: '56px', left: '0' } : {})}
          >
            <Image src="/images/payments/apple.webp" width="50px" />
            <Image src="/images/payments/google.webp" width="50px" />
            <Image src="/images/payments/mastercard.webp" width="50px" />
            <Image src="/images/payments/visa.webp" width="50px" />
            <Image src="/images/payments/paypal.webp" width="50px" />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}

import{j as n}from"./iframe-esvdJFfr.js";import{$ as j}from"./Form-DdNsEW3C.js";import{G}from"./Grid-BOiz-WoL.js";import{G as e}from"./GridItem-C4uqQdiW.js";import{T as r}from"./TextField-CoD44Ed8.js";import{S as I}from"./Select-CfNi0cXh.js";import{B as a}from"./Button-DMBclqbI.js";import{R as g,a as b}from"./Radio-ZF8idMvz.js";import{C as h}from"./CheckboxGroup-DW0nb_Rv.js";import{C as k}from"./Checkbox-TDCocffc.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CA6cvJcn.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D1sBEd5H.js";import"./useFocusRing-VPnEXuzQ.js";import"./index-Dor75QZH.js";import"./index-w_P7rb89.js";import"./TextFieldBase-Bv1SHVMb.js";import"./TextField-mCGJIrIQ.js";import"./FieldError-BaINGyL-.js";import"./Text-C5kAi3KT.js";import"./Text-ekZXbZU3.js";import"./ListKeyboardDelegate-CUtP8j2L.js";import"./SelectionManager-mcBb6mrg.js";import"./useEvent-uMfP9ZnP.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-UstPQ-Kp.js";import"./useDescription-DOawyMZ9.js";import"./useControlledState-D2MlztED.js";import"./Group-D_ry0wB6.js";import"./Input-9peWIVZn.js";import"./Hidden-Bqx_ujhi.js";import"./Button-DhAk4_Yc.js";import"./useLabels-DQgkfLF4.js";import"./useButton-CupiQMID.js";import"./useTextField-DYwfpDTA.js";import"./useField-Dx8Fw3cP.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-DR8bSrm0.js";import"./Dialog-ae1XEB9w.js";import"./RSPContexts-zxEO8kSv.js";import"./OverlayArrow-2qFZV0Cv.js";import"./useResizeObserver-Bb3Cm1wV.js";import"./Collection-Dsustuye.js";import"./index-BM8AdnR0.js";import"./Separator-Cl0zSfmO.js";import"./PressResponder-SNl5rve5.js";import"./useLocalizedStringFormatter-DsuYda5r.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-U__wPlqV.js";import"./Dialog-Bjua788c.js";import"./useLocalizedStringFormatter-CLJ56Mmw.js";import"./x-D44o35Sp.js";import"./createLucideIcon-nwVrMw5a.js";import"./Heading-MuTigkxz.js";import"./info-Dw1cDVbX.js";import"./Tag-BxoA5PQ0.js";import"./ListBox-DrCK-vmo.js";import"./DragAndDrop-BtpZy0FW.js";import"./inertValue-Df2OJuNj.js";import"./useListState-Cb-5SUR7.js";import"./useHighlightSelectionDescription-DCFUqbB8.js";import"./useUpdateEffect-DpQN22SR.js";import"./useHasTabbableChild-wyQ0MftN.js";import"./check-mOvy8G9Z.js";import"./ListBoxSection-C7HhZg76.js";import"./Virtualizer-BM8bS2Ip.js";import"./useObserveElement-CQ5xD8Or.js";import"./chevron-down-BoQB5tvo.js";import"./Button.module-DgYkWG2o.js";import"./useToggleState-D_Zmk7ed.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};

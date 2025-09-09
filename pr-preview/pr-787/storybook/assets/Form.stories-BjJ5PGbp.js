import{j as n}from"./iframe-Ch7FknzR.js";import{$ as j}from"./Form-DSlbijOj.js";import{G}from"./Grid-CnVI8XZs.js";import{G as e}from"./GridItem-e3WPN5zP.js";import{T as r}from"./TextField-CKbx9OeO.js";import{S as I}from"./Select-BpYIMh1r.js";import{B as a}from"./Button-CZkOz81y.js";import{R as g,a as b}from"./Radio-CzfNCMEt.js";import{C as h}from"./CheckboxGroup-JKZti6y4.js";import{C as k}from"./Checkbox-C5k5G3DR.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DM0R21dB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C2UU9YUM.js";import"./useFocusRing-anxBJeJ0.js";import"./index-DRM5vA1Q.js";import"./index-BsRWB-yo.js";import"./TextFieldBase-B-iYT6lU.js";import"./TextField-DMmVAYXZ.js";import"./FieldError-CV5rfDp_.js";import"./Text-BhgVr0BQ.js";import"./Text-NO2azRoP.js";import"./ListKeyboardDelegate-UvMTK2BA.js";import"./SelectionManager-XgEF97Rq.js";import"./useEvent-Byq4Glce.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-B6PdwGPA.js";import"./useDescription-Ndu22-uA.js";import"./useControlledState-ZT7_75f-.js";import"./Group-Cc2T8wBN.js";import"./Input-j0FFYlbk.js";import"./Hidden-XRwnd7Zu.js";import"./Button-D5odQzto.js";import"./useLabels-B97PPfXt.js";import"./useButton-eQYohx6F.js";import"./useTextField-DEMSWIcM.js";import"./useField-wcr6iWpT.js";import"./TextField.module-8oYDuXgF.js";import"./Label-BG1rTO5v.js";import"./Dialog-Dd5xWZDX.js";import"./RSPContexts-C7S3bByZ.js";import"./OverlayArrow-BFsm-N_5.js";import"./useResizeObserver-qzVmYxda.js";import"./Collection-GtkOQX93.js";import"./index-CK0WUy1_.js";import"./Separator-C0XEt-fF.js";import"./PressResponder-DdOijE2_.js";import"./useLocalizedStringFormatter-DoeQKr5m.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-COTYP0yi.js";import"./Dialog-B3apjveo.js";import"./useLocalizedStringFormatter-Dw11msps.js";import"./x-45dK5OLL.js";import"./createLucideIcon-wJpKcBaO.js";import"./Heading-ET_0nkdC.js";import"./info-CU5XlA8a.js";import"./Tag-DlpiSVTS.js";import"./ListBox-BbggaYuJ.js";import"./DragAndDrop-CJNXsuqv.js";import"./inertValue-dvhMJ45K.js";import"./useListState-yn7pKxvr.js";import"./useHighlightSelectionDescription-Ce842bQO.js";import"./useUpdateEffect-DWDFWOI_.js";import"./useHasTabbableChild-DYlDbZZp.js";import"./check-xvyymWVn.js";import"./ListBoxSection-CaOhqk61.js";import"./Virtualizer-Dj0Ehubr.js";import"./useObserveElement-CPkFK5tg.js";import"./chevron-down-ME4d6D__.js";import"./Button.module-BkTnSRp5.js";import"./useToggleState-CXRwmF12.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

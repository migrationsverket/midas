import{j as n}from"./iframe-CuA_HfLz.js";import{$ as j}from"./Form-ewkOKfmu.js";import{G}from"./Grid-BxtnxjQi.js";import{G as e}from"./GridItem-DRGQzqEQ.js";import{T as r}from"./TextField-BnAnyuds.js";import{S as I}from"./Select-DqVngIA9.js";import{B as a}from"./Button-BYMKg1bB.js";import{R as g,a as b}from"./Radio-rsxDHurO.js";import{C as h}from"./CheckboxGroup-Ce9RsmIp.js";import{C as k}from"./Checkbox-kGoP8OVd.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CGeSy2Rh.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D8MgfINu.js";import"./useFocusRing-tguvtbyd.js";import"./index-1mAOh-2J.js";import"./index-CDpKywge.js";import"./TextFieldBase-BsMmw3Fl.js";import"./TextField-CUqUbaif.js";import"./FieldError-BcNgJeZ4.js";import"./Text-BvPU-aQH.js";import"./Text-C38Yhalr.js";import"./ListKeyboardDelegate-Df-LXrGc.js";import"./SelectionManager-Duu5y2qQ.js";import"./useEvent-DJJABKQy.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-WEro-k5C.js";import"./useDescription-CN_sHlcn.js";import"./useControlledState-BqpHJnSU.js";import"./Group-fu5gJs8b.js";import"./Input-voo0KcMX.js";import"./Hidden-iHRd-MbM.js";import"./Button-BNmtowNF.js";import"./useLabels-D2fxeWGH.js";import"./useButton-C07Rl6Ah.js";import"./useTextField-Dan4P78J.js";import"./useField-hvsWQr6h.js";import"./TextField.module-DjUItNl5.js";import"./Label-pkQmNEdO.js";import"./Dialog-XEBgvWL2.js";import"./RSPContexts-B4XvrXuC.js";import"./OverlayArrow-BhOLyvYk.js";import"./useResizeObserver-CslTL-3P.js";import"./Collection-D_gJpwov.js";import"./index-gY4x1fyU.js";import"./Separator-s3EaLyuY.js";import"./PressResponder-B9hM_YDu.js";import"./useLocalizedStringFormatter-CUWbTmkw.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DcohA9Qn.js";import"./Dialog-DwZ7Ak02.js";import"./useLocalizedStringFormatter-U9QIvHpI.js";import"./x-CiYU9bso.js";import"./createLucideIcon-DNS3Wdg_.js";import"./Heading-C1IWAiqW.js";import"./info-DZKL8lrj.js";import"./Tag-A4CXqsph.js";import"./ListBox-B0NqATDh.js";import"./DragAndDrop-CSuHtKNT.js";import"./inertValue-8R1DspZr.js";import"./useListState-DXgfY3hm.js";import"./useHighlightSelectionDescription-BdBDMLNT.js";import"./useUpdateEffect-JWcW9fG9.js";import"./useHasTabbableChild-BBWwFnfb.js";import"./check-M-QGxvkz.js";import"./ListBoxSection-Cdj1xFjH.js";import"./Virtualizer-517QCQdv.js";import"./useObserveElement-CRTuIGfm.js";import"./chevron-down-zeMmS4_B.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CWviy5V7.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

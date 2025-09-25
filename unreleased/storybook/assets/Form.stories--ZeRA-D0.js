import{j as n}from"./iframe-aF6mY0Oe.js";import{$ as j}from"./Form-DZn-H0i1.js";import{G}from"./Grid-CAl7e3a8.js";import{G as e}from"./GridItem-Bq_8Gos4.js";import{T as r}from"./TextField-ecmlOm2J.js";import{S as I}from"./Select-oyz3rgxL.js";import{B as a}from"./Button-BJYOnwGY.js";import{R as g,a as b}from"./Radio-DAz-n6_V.js";import{C as h}from"./CheckboxGroup-CssNbRdK.js";import{C as k}from"./Checkbox-j-uq6Uu-.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DFGqrSyb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CJTi1WPk.js";import"./useFocusRing-DTrz9-fw.js";import"./index-CJnx68Py.js";import"./index-CYUfkFFc.js";import"./TextFieldBase-CEw42K6b.js";import"./TextField-VmWkXvKS.js";import"./FieldError-BEPerrKR.js";import"./Text-BMiV8L2y.js";import"./Text-DhBcRf-J.js";import"./ListKeyboardDelegate-DuR3D7TM.js";import"./SelectionManager-Bc20nag2.js";import"./useEvent-B0iLOBoa.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-ClxgOVGV.js";import"./useDescription-DELoPoZW.js";import"./useControlledState-CbLsySA0.js";import"./Group-CKEcSRQU.js";import"./Input-BsQM_TZM.js";import"./Hidden-DOvaJRpp.js";import"./Button-noFY4LdH.js";import"./useLabels-CtjGmi0R.js";import"./useButton-CuA0O0WY.js";import"./useTextField-BfWOXJA5.js";import"./useField-CVAtE2pC.js";import"./TextField.module-DjUItNl5.js";import"./Label-vrrr7kxY.js";import"./Dialog-yddzjRvG.js";import"./RSPContexts-CxVLbN67.js";import"./OverlayArrow-CK8AgqhM.js";import"./useResizeObserver-C3IgBQyi.js";import"./Collection-BefO4J0o.js";import"./index-Btx4IIFJ.js";import"./Separator-Bw5eeKBU.js";import"./PressResponder-DmEWCfGG.js";import"./useLocalizedStringFormatter-C3j_GnGG.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D1jkffR3.js";import"./Dialog-DiuEXpc8.js";import"./useLocalizedStringFormatter-BhRZrWV4.js";import"./x-SfgJHpF-.js";import"./createLucideIcon-CGb0x05u.js";import"./Heading-Cp94S52C.js";import"./info-g_VAmP-m.js";import"./Tag-ieJu0DZt.js";import"./ListBox-CPUaKFxh.js";import"./DragAndDrop-SDu85eiv.js";import"./inertValue-DqvMgLKs.js";import"./useListState-BZexvQ_T.js";import"./useHighlightSelectionDescription-BVeMvasy.js";import"./useUpdateEffect-aF76pqAr.js";import"./useHasTabbableChild-CwXADRoA.js";import"./check-tvIEoM58.js";import"./ListBoxSection-UmJcej9c.js";import"./Virtualizer-DUGA_JtD.js";import"./useObserveElement-8CdhggsS.js";import"./chevron-down-FKEfFszZ.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-De1fcN4G.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

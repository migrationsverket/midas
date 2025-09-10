import{j as n}from"./iframe-DM4JBH32.js";import{$ as j}from"./Form-CHoUifZ8.js";import{G}from"./Grid-C7kllYyX.js";import{G as e}from"./GridItem-jAGmBy87.js";import{T as r}from"./TextField-DxDXVGE1.js";import{S as I}from"./Select-BrBuo1Px.js";import{B as a}from"./Button-CdsAGIRW.js";import{R as g,a as b}from"./Radio-BRe4LRAl.js";import{C as h}from"./CheckboxGroup-BgsVhaYd.js";import{C as k}from"./Checkbox-3s7GVXHC.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DhQKzBvZ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BYpu6C5c.js";import"./useFocusRing-ChYBeMyq.js";import"./index-CO6bLn_V.js";import"./index-C6Qb6Fiv.js";import"./TextFieldBase-UGGJTAww.js";import"./TextField-q1nDfC1C.js";import"./FieldError-BoH2DxsH.js";import"./Text-B-tnsee9.js";import"./Text-7YC3MkDD.js";import"./ListKeyboardDelegate-XCicrj5b.js";import"./SelectionManager-Cxzx9Itv.js";import"./useEvent-IM67gZrb.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DQOBbr_K.js";import"./useDescription-Bvps5D0G.js";import"./useControlledState-iHZ5v-uD.js";import"./Group-BCA09Wqp.js";import"./Input-Dmty3Jki.js";import"./Hidden-D7TbZwhG.js";import"./Button-DEAK9AGc.js";import"./useLabels-D_NncDT6.js";import"./useButton-Du356jJp.js";import"./useTextField-dFewWOBQ.js";import"./useField-06PT16Sz.js";import"./TextField.module-8oYDuXgF.js";import"./Label-BoevlFcB.js";import"./Dialog-Dmy5XGLS.js";import"./RSPContexts-Dd3XrUK4.js";import"./OverlayArrow-Dj-q2RTo.js";import"./useResizeObserver-CJakEK5G.js";import"./Collection-DF9AwbxA.js";import"./index-CnhyggEQ.js";import"./Separator-CzmFjGVc.js";import"./PressResponder-CUwC0v1L.js";import"./useLocalizedStringFormatter-CK1QE2Da.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DSeZqJgN.js";import"./Dialog-EQBPfffO.js";import"./useLocalizedStringFormatter-Vha9ZAwy.js";import"./x-BnFlJ5TD.js";import"./createLucideIcon-CWoRUv1u.js";import"./Heading--6egvyaJ.js";import"./info-C7U0Ptzx.js";import"./Tag-B8UR7roS.js";import"./ListBox-DAgt6xMm.js";import"./DragAndDrop-gVsGDdFe.js";import"./inertValue-CUhPYEaG.js";import"./useListState-BM2DWLaf.js";import"./useHighlightSelectionDescription-B4DZ2jaB.js";import"./useUpdateEffect-C-9Nul7R.js";import"./useHasTabbableChild-BJQ3ZSN9.js";import"./check-DnbFygm9.js";import"./ListBoxSection-DowhlXv7.js";import"./Virtualizer-C_KGtmmX.js";import"./useObserveElement-BLUyNT8X.js";import"./chevron-down-CJmZwWlN.js";import"./Button.module-BkTnSRp5.js";import"./useToggleState-rFjEqLOP.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

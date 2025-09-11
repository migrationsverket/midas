import{j as n}from"./iframe-DodFFUPz.js";import{$ as j}from"./Form-_KXUbFJ8.js";import{G}from"./Grid-DGlWd3zH.js";import{G as e}from"./GridItem-C8cfSdyh.js";import{T as r}from"./TextField-CcHMfsBt.js";import{S as I}from"./Select-CBXXa2iz.js";import{B as a}from"./Button-BqHUSULr.js";import{R as g,a as b}from"./Radio-GBo7s0-s.js";import{C as h}from"./CheckboxGroup-B7y82laS.js";import{C as k}from"./Checkbox-DEl8YGJj.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B0ktdMfN.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BhPuAF80.js";import"./useFocusRing-xjhFmxw0.js";import"./index-qd6lekP5.js";import"./index-BdOUKbCM.js";import"./TextFieldBase-B5xMG4IF.js";import"./TextField-DpDXEvap.js";import"./FieldError-DimyTfn2.js";import"./Text-CMG3G2yF.js";import"./Text-CgQ1A70s.js";import"./ListKeyboardDelegate-C3mHkZCx.js";import"./SelectionManager-CjQXhSGJ.js";import"./useEvent-Df2naM8K.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-eY7MJ6OK.js";import"./useDescription-DPzpj0jq.js";import"./useControlledState-DZBAJmat.js";import"./Group-D3CRXd-T.js";import"./Input-Bx5p7U0l.js";import"./Hidden-BMaOK31V.js";import"./Button-DlgpH9zy.js";import"./useLabels-C957H083.js";import"./useButton-DNUx9KoH.js";import"./useTextField-Cf-PKIGd.js";import"./useField-Dr65GWyi.js";import"./TextField.module-DjUItNl5.js";import"./Label-CPKL9R0A.js";import"./Dialog-Cz8kb1mk.js";import"./RSPContexts-BVZyNHVz.js";import"./OverlayArrow-Dw0WwJMx.js";import"./useResizeObserver-BQa5yOtm.js";import"./Collection-DVyPhVvc.js";import"./index-BbvkHo5C.js";import"./Separator-DTKMcsj4.js";import"./PressResponder-vVJAHgJ8.js";import"./useLocalizedStringFormatter-Dis84LT3.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BHPhaX7Z.js";import"./Dialog-CTbk4nFL.js";import"./useLocalizedStringFormatter-C6Wn20bv.js";import"./x-CG-_Q5di.js";import"./createLucideIcon-DFykA5GW.js";import"./Heading-B54m4KTs.js";import"./info-CNlvzLq9.js";import"./Tag-DFMWc6Ph.js";import"./ListBox-DUEi7gll.js";import"./DragAndDrop-BW4_X2RN.js";import"./inertValue-DlGEYrW7.js";import"./useListState-D7xuXn63.js";import"./useHighlightSelectionDescription-CTph-G9S.js";import"./useUpdateEffect-BY37yw-K.js";import"./useHasTabbableChild-CnHGM-1y.js";import"./check-FR7L92wJ.js";import"./ListBoxSection-FDGipdTZ.js";import"./Virtualizer-CZyH_8du.js";import"./useObserveElement-Ds9VfX7z.js";import"./chevron-down-QtLWpZSb.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-B5X9wnPm.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

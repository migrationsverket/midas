import{j as n}from"./iframe-hkOXKyZH.js";import{$ as j}from"./Form-C4-wSMt0.js";import{G}from"./Grid-D7cSnQIQ.js";import{G as e}from"./GridItem-B8LjO7DB.js";import{T as r}from"./TextField-D0TTTZ8X.js";import{S as I}from"./Select-C7BEDwl5.js";import{B as a}from"./Button-DBFWCRWQ.js";import{R as g,a as b}from"./Radio-BO40dMym.js";import{C as h}from"./CheckboxGroup-Bbg9TXMB.js";import{C as k}from"./Checkbox-DWtO2emI.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BdV861L6.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BzN9z2JI.js";import"./useFocusRing-C79BKtrz.js";import"./index-C7wlBik6.js";import"./index-aQUuQKga.js";import"./TextFieldBase-CV0JvaQN.js";import"./TextField-CsbKaRsl.js";import"./FieldError-ChXjpzUu.js";import"./Text-c-jus4I1.js";import"./Text-Cwkf9hq4.js";import"./ListKeyboardDelegate-B_XbsEXm.js";import"./SelectionManager-CBUU1eyV.js";import"./useEvent-gvtKRKSj.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-B6RlSEwq.js";import"./useDescription-DW9uiNor.js";import"./useControlledState-DviCxBQ0.js";import"./Group-DryP_hM5.js";import"./Input-CEWkp6H8.js";import"./Hidden-B0zqG2wK.js";import"./Button-D_0ZmIdM.js";import"./useLabels-8mDyTwDg.js";import"./useButton-8apWZfM7.js";import"./useTextField-j83Ztvn9.js";import"./useField-PdzjcPPj.js";import"./TextField.module-DjUItNl5.js";import"./Label-CN5HRNpD.js";import"./Dialog-DWuuVdyc.js";import"./RSPContexts-BADoT9Lq.js";import"./OverlayArrow-C53D5kbj.js";import"./useResizeObserver-BgpY71yv.js";import"./Collection-NhTp_fC0.js";import"./index-DIc_Bg11.js";import"./Separator-Cb5YNDHy.js";import"./PressResponder-CEVPHxzE.js";import"./useLocalizedStringFormatter-DUDST5e1.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-HITJBAIs.js";import"./Dialog-BJIQ7g2E.js";import"./useLocalizedStringFormatter-8sRBGHWb.js";import"./x-C8wgGwRP.js";import"./createLucideIcon-CToz266h.js";import"./Heading-BPnFcLYC.js";import"./info-ZqRIO83s.js";import"./Tag-BMzVfXLm.js";import"./ListBox-V5fc4neC.js";import"./DragAndDrop-BgbqrtNi.js";import"./inertValue-sf4_vP0N.js";import"./useListState-BCjmYJw8.js";import"./useHighlightSelectionDescription-Dtz8Vy8r.js";import"./useUpdateEffect-B5WpHGqZ.js";import"./useHasTabbableChild-Dw9RGm5q.js";import"./check-BZSGRWO_.js";import"./ListBoxSection-DHZAFQy_.js";import"./Virtualizer-aLON1_uV.js";import"./useObserveElement-jJFlahY7.js";import"./chevron-down-F_JAmCej.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-kSDcPVnX.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

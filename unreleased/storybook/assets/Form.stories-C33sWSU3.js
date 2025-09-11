import{j as n}from"./iframe-Ctz7No1o.js";import{$ as j}from"./Form-DHxGbfDM.js";import{G}from"./Grid-Bs_gkiJL.js";import{G as e}from"./GridItem-CH08BfoU.js";import{T as r}from"./TextField-Bv8RFhZm.js";import{S as I}from"./Select-CYq0bv6R.js";import{B as a}from"./Button-Ly_Gg0a2.js";import{R as g,a as b}from"./Radio-CPSsMj58.js";import{C as h}from"./CheckboxGroup-Mlt7mPc6.js";import{C as k}from"./Checkbox-BBfhxwow.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BfOAahVB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C-ARMAHq.js";import"./useFocusRing-BIXYgKfR.js";import"./index-B4D26wo-.js";import"./index-BrvAFOj_.js";import"./TextFieldBase-Dm5keONU.js";import"./TextField-DDmZCu--.js";import"./FieldError-CJZfyJlm.js";import"./Text-CLF9xucF.js";import"./Text-DaJrj05t.js";import"./ListKeyboardDelegate-Cfbh0YpD.js";import"./SelectionManager-BIccKWkx.js";import"./useEvent-DEzace9H.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DdI6IzS7.js";import"./useDescription-B_lZZd4s.js";import"./useControlledState-UGdYHVBr.js";import"./Group-mOieMmL7.js";import"./Input-BalqyU_H.js";import"./Hidden-D0446nH_.js";import"./Button-DG_oF4nV.js";import"./useLabels-BzGI7x3p.js";import"./useButton-_bnuILTM.js";import"./useTextField-C6z9W7zi.js";import"./useField-B6Dd3UD8.js";import"./TextField.module-DjUItNl5.js";import"./Label-C_TOi97a.js";import"./Dialog-2RrjGSvr.js";import"./RSPContexts-Ofvedc0q.js";import"./OverlayArrow-C2LiRuRE.js";import"./useResizeObserver-Dtl7JF0C.js";import"./Collection-0VCVNFuv.js";import"./index-DgfuqsA2.js";import"./Separator-vXO7pOTk.js";import"./PressResponder-BUtugzaA.js";import"./useLocalizedStringFormatter-D1B5Q96R.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-dTmy3lIW.js";import"./Dialog-CqUhVdgs.js";import"./useLocalizedStringFormatter-BrhEdUhH.js";import"./x-DtDM2fsr.js";import"./createLucideIcon-CHl5w9ch.js";import"./Heading-DTsFZd4N.js";import"./info-C3EoB1wB.js";import"./Tag-6-eFm1O7.js";import"./ListBox-wNby6RBU.js";import"./DragAndDrop-DwgWR2_I.js";import"./inertValue-B6xAKUSJ.js";import"./useListState-CZDqI737.js";import"./useHighlightSelectionDescription-jhCmneD6.js";import"./useUpdateEffect-CbK-dmQv.js";import"./useHasTabbableChild-x0KCROCM.js";import"./check-BziaaKis.js";import"./ListBoxSection-CidiwOwb.js";import"./Virtualizer-CbfzXK6g.js";import"./useObserveElement-C7RiZZyA.js";import"./chevron-down-12xZTJUZ.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DK7qxND9.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

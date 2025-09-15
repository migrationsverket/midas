import{j as n}from"./iframe-DePNx6Zf.js";import{$ as j}from"./Form-DotdFXFB.js";import{G}from"./Grid-B6474unx.js";import{G as e}from"./GridItem-BAFqW4XS.js";import{T as r}from"./TextField-DF5g6fwc.js";import{S as I}from"./Select-D_Rn7I7S.js";import{B as a}from"./Button-CxDmAxp7.js";import{R as g,a as b}from"./Radio-BiNfbXX0.js";import{C as h}from"./CheckboxGroup-ugyPfkao.js";import{C as k}from"./Checkbox-C6Psn_St.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Ctgo53OJ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CWQGWMgv.js";import"./useFocusRing-B57OhQ9l.js";import"./index-BIYUwWYg.js";import"./index-DP-1J5OY.js";import"./TextFieldBase-DA1Xetl5.js";import"./TextField-B-fnxMR7.js";import"./FieldError-hlI0fqgL.js";import"./Text-BAkZI3Tx.js";import"./Text-D2jgnbx9.js";import"./ListKeyboardDelegate-Beuli1ic.js";import"./SelectionManager-BwEYBeZl.js";import"./useEvent-DMkySKRc.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CK6PiBL4.js";import"./useDescription-BciCBjl2.js";import"./useControlledState-CZ5TDD-5.js";import"./Group-UrpgEQ_Y.js";import"./Input-DhLeGymL.js";import"./Hidden-DzJfI2WP.js";import"./Button-3l946itx.js";import"./useLabels-BFq_6VGb.js";import"./useButton-BQ3MYboQ.js";import"./useTextField-BeR5ukCX.js";import"./useField-bWd08rf8.js";import"./TextField.module-DjUItNl5.js";import"./Label-BqOrHf11.js";import"./Dialog-DQj0Z99E.js";import"./RSPContexts-BrMKAg6J.js";import"./OverlayArrow-BXIy2Zo6.js";import"./useResizeObserver-BE_LsK-I.js";import"./Collection-CnrUGdFc.js";import"./index-CiJP2GkI.js";import"./Separator-CwLUPTSn.js";import"./PressResponder-oAaurQE1.js";import"./useLocalizedStringFormatter-DSkiPpbM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CZF-Qas-.js";import"./Dialog-DW59aPTW.js";import"./useLocalizedStringFormatter-XfghK0ip.js";import"./x-BmkJtOcg.js";import"./createLucideIcon-DJSKN6Oq.js";import"./Heading-BATu6vS2.js";import"./info-s6m0UKKI.js";import"./Tag-COdvBiUd.js";import"./ListBox-DFXpXWTl.js";import"./DragAndDrop-Cxg9KNGD.js";import"./inertValue-De6BjVQa.js";import"./useListState-ih2GDWOQ.js";import"./useHighlightSelectionDescription-eNd89UF_.js";import"./useUpdateEffect-BuLL8coW.js";import"./useHasTabbableChild-D-b6VSG_.js";import"./check-C4xv_GYd.js";import"./ListBoxSection--YbGV2bT.js";import"./Virtualizer-rq3AyLIT.js";import"./useObserveElement-BYMIQ7or.js";import"./chevron-down-DBAzaY6P.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-lzBdca3i.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

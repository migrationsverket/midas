import{j as n}from"./iframe-DHklBLHo.js";import{$ as j}from"./Form-DGEUDYzT.js";import{G}from"./Grid-Ck0SCHMN.js";import{G as e}from"./GridItem-Ciaxbfli.js";import{T as r}from"./TextField-ZCsi2a3F.js";import{S as I}from"./Select-Dx3lr2BZ.js";import{B as a}from"./Button-Dzt9c6_H.js";import{R as g,a as b}from"./Radio-Fkhoe_l-.js";import{C as h}from"./CheckboxGroup-wDl64-CQ.js";import{C as k}from"./Checkbox-DxClxe5p.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DyqySbgH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Uiy_iZTG.js";import"./useFocusRing-CSMMOdQO.js";import"./index-DB7V-YOm.js";import"./index-C8owGnXX.js";import"./TextFieldBase-Da_KPGIi.js";import"./TextField-DURHe0l8.js";import"./FieldError-yPVPkK0U.js";import"./Text-CB9c4cql.js";import"./Text-DlLfxVlE.js";import"./ListKeyboardDelegate-CWC9p7Uf.js";import"./SelectionManager-CRjyENpI.js";import"./useEvent-BGCT9nTv.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BOGO3UKs.js";import"./useDescription-BD7nVZwV.js";import"./useControlledState-BUQ156QI.js";import"./Group-B6l-KjeH.js";import"./Input-DE0BC6Zu.js";import"./Hidden-DWaI5zn9.js";import"./Button-DhZxB07K.js";import"./useLabels-CWX826iw.js";import"./useButton-DGR2IUC0.js";import"./useTextField-D7HCfUFP.js";import"./useField-Dnyv0Fyc.js";import"./TextField.module-DjUItNl5.js";import"./Label-BlbMzWhS.js";import"./Dialog-CWcOwHcz.js";import"./RSPContexts-G5HW713q.js";import"./OverlayArrow-hNKsfeqg.js";import"./useResizeObserver--EcMfRu1.js";import"./Collection-CZTgey-2.js";import"./index-BQ-LRe3D.js";import"./Separator-CBF41kkx.js";import"./PressResponder-BW5XtnA0.js";import"./useLocalizedStringFormatter-DtNy7SNZ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-gmK7GZ4x.js";import"./Dialog-mHkAz4AZ.js";import"./useLocalizedStringFormatter-DGDlyggr.js";import"./x-Dr60WVO-.js";import"./createLucideIcon-CQwhcRuR.js";import"./Heading-CSe6oKhg.js";import"./info-4pEjDu7k.js";import"./Tag-Dwmht92-.js";import"./ListBox-BElApgQO.js";import"./DragAndDrop-CeQAS2l1.js";import"./inertValue-XZ4H6HdX.js";import"./useListState-Btpw2L1U.js";import"./useHighlightSelectionDescription-DB5cbKiv.js";import"./useUpdateEffect-CVzX6_7L.js";import"./useHasTabbableChild-BFRyCF1L.js";import"./check-B4VM378J.js";import"./ListBoxSection-DbvplgOj.js";import"./Virtualizer-BiYrkc-D.js";import"./useObserveElement-DtZDrnUy.js";import"./chevron-down-fYJZQLpz.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CqFomI6D.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

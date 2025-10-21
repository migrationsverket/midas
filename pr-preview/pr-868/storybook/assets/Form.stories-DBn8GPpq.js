import{j as n}from"./iframe-9uQMLEFM.js";import{$ as j}from"./Form-BxNmpCuh.js";import{G}from"./Grid-CWEu0LYu.js";import{G as e}from"./GridItem-DNJUCKKN.js";import{T as r}from"./TextField-D8aRAlQf.js";import{S as I}from"./Select-BSgV_F0E.js";import{B as a}from"./Button-1uSs5kk_.js";import{R as g,a as b}from"./Radio-Blufzks7.js";import{C as h}from"./CheckboxGroup-desqUBI9.js";import{C as k}from"./Checkbox-DMFuR86R.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BTOY5Iih.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bu6QTvJZ.js";import"./useFocusRing-DtXZYfkl.js";import"./index-DgFVapif.js";import"./index-Df1glY4P.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DEG-9gaq.js";import"./TextField-DOJt6zRJ.js";import"./FieldError-WMqlgq9Z.js";import"./Text-Bkm9Piv0.js";import"./Text-utSFTMs0.js";import"./RSPContexts-CYTowsZL.js";import"./Group-C-Yg_5BV.js";import"./Input-CX3uPQuu.js";import"./Hidden-BTU3AIr-.js";import"./Button-DrXrkuug.js";import"./useLabels-DLG53fh7.js";import"./useButton-75obCxYN.js";import"./useTextField-D1cGtmsH.js";import"./useControlledState-BmSrYQ_d.js";import"./useField-Dd--JJsU.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-DmW1w_cJ.js";import"./Dialog-lefs78-c.js";import"./OverlayArrow-9zaWyCwR.js";import"./useResizeObserver-BhSWJ1p5.js";import"./Collection-CZdwJHh_.js";import"./index-DspnS8tx.js";import"./Separator-QAWhojjB.js";import"./SelectionManager-BzX7Eq0U.js";import"./useEvent-q0OGT-rN.js";import"./scrollIntoView-vBuhCpjm.js";import"./SelectionIndicator-DLZeUbzB.js";import"./useDescription-DcsJqhyO.js";import"./ListKeyboardDelegate-Hl33qIAd.js";import"./PressResponder-CrUk-JXF.js";import"./useLocalizedStringFormatter-DGeAdmak.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CahOKOB-.js";import"./VisuallyHidden-DSQtv1hV.js";import"./useLocalizedStringFormatter-CByGkEpg.js";import"./x-CoAx-43h.js";import"./createLucideIcon-CRMHsM6N.js";import"./Heading-DHxxggBL.js";import"./info-CyxD6Cza.js";import"./Popover-CHvMoMhB.js";import"./Tag-Dbs5zS7i.js";import"./ListBox-C0bq4av8.js";import"./DragAndDrop-B5mRtPnf.js";import"./inertValue-CQniBizu.js";import"./useListState-C20iS2v1.js";import"./useHighlightSelectionDescription-DOZQVbPU.js";import"./useUpdateEffect-Bf5AthLJ.js";import"./useHasTabbableChild-DVObzgEB.js";import"./check-C8hyaZ16.js";import"./ListBoxSection-CRhx7FIJ.js";import"./Virtualizer-Cc2zFObk.js";import"./chevron-down-BnjF5tgb.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BLUnYg80.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

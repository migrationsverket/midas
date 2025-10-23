import{j as n}from"./iframe-DcAJ2ZJg.js";import{$ as j}from"./Form-BQ__3nKc.js";import{G}from"./Grid-Dw7DHpyY.js";import{G as e}from"./GridItem-C8CHdabw.js";import{T as r}from"./TextField-pgqK7iXc.js";import{S as I}from"./Select-_jf8qJUL.js";import{B as a}from"./Button-DeeuRJg4.js";import{R as g,a as b}from"./Radio-BL0Q1HpU.js";import{C as h}from"./CheckboxGroup-CVolOt8O.js";import{C as k}from"./Checkbox-BhFxotZa.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DfWfZ4K6.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-ByYWDJYI.js";import"./useFocusRing-DoVCJMpb.js";import"./index-BEn_fgqG.js";import"./index-BImlJy0D.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DBkJRWDZ.js";import"./TextField-B9MRGHYS.js";import"./FieldError-sTgzv2bL.js";import"./Text-CoOEDDOK.js";import"./Text-CzOfImiC.js";import"./RSPContexts-IxICh8ZI.js";import"./Group-D3BhvbF1.js";import"./Input-BHyxoc-p.js";import"./Hidden-DjKyp5I7.js";import"./Button-CnA_liPh.js";import"./useLabels-p4_MJdfd.js";import"./useButton-ipB-6l2O.js";import"./useTextField-Ct8L6prS.js";import"./useControlledState-SuDFX2cU.js";import"./useField-DlnBTYPD.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-gN5YvZvc.js";import"./Dialog-CWPXXtjr.js";import"./OverlayArrow-BABvXFhF.js";import"./useResizeObserver-C3cRnh0b.js";import"./Collection-CWUdUZZa.js";import"./index-BDuo-erc.js";import"./Separator-DAjpg0ax.js";import"./SelectionManager-CSQjN2os.js";import"./useEvent-Dha3ld6E.js";import"./scrollIntoView-2p82eA0E.js";import"./SelectionIndicator-fA30KV0w.js";import"./useDescription-qE97LE4s.js";import"./ListKeyboardDelegate-CWcazBLK.js";import"./PressResponder-D5gtpyhk.js";import"./useLocalizedStringFormatter-CbwPFicv.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CNQi9Fa9.js";import"./VisuallyHidden-C8x_6mbh.js";import"./useLocalizedStringFormatter-CYiCPaXx.js";import"./x-D2COrIZu.js";import"./createLucideIcon-D3RYulYr.js";import"./Heading-C8AMh7UW.js";import"./info-BjdUQkkI.js";import"./Popover-DvwwTb7J.js";import"./Tag-us-zvToE.js";import"./ListBox-CUkxdSRM.js";import"./DragAndDrop-GN25Tqmn.js";import"./inertValue-DL4AdwQI.js";import"./useListState-aXX3i4TO.js";import"./useHighlightSelectionDescription-BVuCaxQz.js";import"./useUpdateEffect-DHhpkC-F.js";import"./useHasTabbableChild-DVOoi_ip.js";import"./check-CwT2Y47R.js";import"./ListBoxSection-_wRlZZv1.js";import"./Virtualizer-Di8XQt1q.js";import"./chevron-down-DXgAokTA.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-xxUyK7O4.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

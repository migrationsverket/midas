import{j as n}from"./iframe-BHmbOUqA.js";import{$ as j}from"./Form-By8m9bNd.js";import{G}from"./Grid-DLCH8L43.js";import{G as e}from"./GridItem-Dqj3n7JR.js";import{T as r}from"./TextField-1EWrZQ-k.js";import{S as I}from"./Select-DEEl05Fa.js";import{B as a}from"./Button-D6eZ8SnA.js";import{R as g,a as b}from"./Radio-OXGV_u8U.js";import{C as h}from"./CheckboxGroup-Bq4EynNK.js";import{C as k}from"./Checkbox-B7f3K8qV.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-otU-kTxi.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-9PObCt4K.js";import"./useFocusRing-CwRv9vb_.js";import"./index-Ds_lxWMd.js";import"./index-awPr--nl.js";import"./TextFieldBase-CD3cuCiH.js";import"./TextField-BG4SVtOw.js";import"./FieldError-PNEXUgXl.js";import"./Text-u7WDlpK_.js";import"./Text-Ca8Pn6qV.js";import"./ListKeyboardDelegate-CxDe0nsw.js";import"./SelectionManager-De3xXG_P.js";import"./useEvent-CitYETeF.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BRpy-Kg7.js";import"./useDescription-CQi3lLZ1.js";import"./useControlledState-CkHxrlgs.js";import"./Group-B08U5uXY.js";import"./Input-t3XpOoOt.js";import"./Hidden-BadakbO5.js";import"./Button-N-CsK6A3.js";import"./useLabels-DhfVSLog.js";import"./useButton-DSKjIhlf.js";import"./useTextField-B2Q_DRyv.js";import"./useField-Bjpf0AHk.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-DGeW75jQ.js";import"./Dialog-BvcvJBhJ.js";import"./RSPContexts-CMLMLFSI.js";import"./OverlayArrow-IcNOnaD7.js";import"./useResizeObserver-HlUTjd-X.js";import"./Collection-C1Hm8__9.js";import"./index-wXjIWFP_.js";import"./Separator-BSzOP4jQ.js";import"./PressResponder-B41mLrOi.js";import"./useLocalizedStringFormatter-B86PEwnM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-COJI-uXN.js";import"./Dialog-DcZu7YaA.js";import"./useLocalizedStringFormatter-BYAAZ7h1.js";import"./x-Bw_fRv18.js";import"./createLucideIcon-3TJQiGFz.js";import"./Heading-BvyzCS2A.js";import"./info-sBUA521W.js";import"./Tag-GkuDjgal.js";import"./ListBox-B2031DgC.js";import"./DragAndDrop-CsfkMxDW.js";import"./inertValue-DwU2s7yS.js";import"./useListState-BPwEBR5v.js";import"./useHighlightSelectionDescription-D6S8BVjQ.js";import"./useUpdateEffect-AIyu0E4c.js";import"./useHasTabbableChild-DasHTYBb.js";import"./check-wPFrdFwZ.js";import"./ListBoxSection-B53Su797.js";import"./Virtualizer-E-dElt-D.js";import"./useObserveElement-DD1Tq6Wc.js";import"./chevron-down-B75s3plG.js";import"./Button.module-DgYkWG2o.js";import"./useToggleState-DpoNFdqR.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

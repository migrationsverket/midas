import{j as n}from"./iframe-exAIIesz.js";import{$ as j}from"./Form-BO2rfsqb.js";import{G}from"./Grid-DiFkPB5y.js";import{G as e}from"./GridItem-BCBB3YWq.js";import{T as r}from"./TextField-DcdGGlwQ.js";import{S as I}from"./Select-Bq5ux5d5.js";import{B as a}from"./Button-DyH0QqsJ.js";import{R as g,a as b}from"./Radio-765_VIr8.js";import{C as h}from"./CheckboxGroup-C9Sti4go.js";import{C as k}from"./Checkbox-EEKS68sZ.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BOVlzJyh.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DnrDtBr9.js";import"./useFocusRing-BZWWt6WH.js";import"./index-dL06C2ZB.js";import"./index-DbjT8O8-.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-gzOMjEgf.js";import"./TextField-BPXTiq8t.js";import"./FieldError-BQpK2FJe.js";import"./Text-Ch7PO2OE.js";import"./Text-BjtozUR7.js";import"./RSPContexts-Bxud3ohR.js";import"./Group-CaQsqDQ6.js";import"./Input-DqkTkBtR.js";import"./Hidden-Cq7tItyH.js";import"./Button-UK7eZhYA.js";import"./useLabels-D6mGi-9p.js";import"./useButton-DOjlTX9-.js";import"./useTextField-wLWNdAVV.js";import"./useControlledState-DHEoYuiB.js";import"./useField-0WAOAHVK.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-DGiCLIdf.js";import"./Dialog-D4_W1tlT.js";import"./OverlayArrow-DejNIL1r.js";import"./useResizeObserver-DZnuTsKm.js";import"./Collection-BjqR60V0.js";import"./index-DoCDkWz9.js";import"./Separator-DYgcKna9.js";import"./SelectionManager-GD3QRAtk.js";import"./useEvent-D4-Tue6s.js";import"./scrollIntoView-C2xIFzTA.js";import"./SelectionIndicator-DnjV2-2T.js";import"./useDescription-Bv2X1BnC.js";import"./ListKeyboardDelegate-B7B4tgnw.js";import"./PressResponder-BKav9PuI.js";import"./useLocalizedStringFormatter-DAGGjybR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CK82ps7F.js";import"./VisuallyHidden-B3pcjXNx.js";import"./useLocalizedStringFormatter-B1xd21qr.js";import"./x-Bw_5GrvR.js";import"./createLucideIcon-AlVM7_G-.js";import"./Heading-D55APO6C.js";import"./info-BJ2y4NVY.js";import"./Popover-CArrV58Z.js";import"./Tag-CXUbip4Y.js";import"./ListBox-DroLWLlk.js";import"./DragAndDrop-DWH5_1P8.js";import"./inertValue-DMGqGjqQ.js";import"./useListState-CONctuXx.js";import"./useHighlightSelectionDescription-2YUwQkgL.js";import"./useUpdateEffect-C9IFA8Mz.js";import"./useHasTabbableChild-CX5T5w5l.js";import"./check-mO5db3_e.js";import"./ListBoxSection-DOlSESAF.js";import"./Virtualizer-D_JDbdie.js";import"./chevron-down-DN0Z2sgS.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-0fmtnfoB.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

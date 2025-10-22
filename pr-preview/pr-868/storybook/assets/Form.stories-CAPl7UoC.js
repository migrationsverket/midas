import{j as n}from"./iframe-D5pndUyn.js";import{$ as j}from"./Form-F2DmtbdP.js";import{G}from"./Grid-cJrtj87K.js";import{G as e}from"./GridItem-BzjYJ0Fp.js";import{T as r}from"./TextField-DJEdfei-.js";import{S as I}from"./Select-DtdMallt.js";import{B as a}from"./Button-CnXZFnzI.js";import{R as g,a as b}from"./Radio-BazS8HKo.js";import{C as h}from"./CheckboxGroup-CUKD9Hiv.js";import{C as k}from"./Checkbox--2uid44A.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BI5ZQ-4U.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B_cd7-rd.js";import"./useFocusRing-BZ0jrP08.js";import"./index-FHmw4oEG.js";import"./index-CWPDjEsT.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DXWa2e--.js";import"./TextField-c43xhYaw.js";import"./FieldError-CxlnkheG.js";import"./Text-D_TC8SUa.js";import"./Text-DcID6_bj.js";import"./RSPContexts-CoOGAiEL.js";import"./Group-KFcApEhc.js";import"./Input-Dzt1GS0D.js";import"./Hidden-R4u7BiPA.js";import"./Button-B2Lr2E4B.js";import"./useLabels-CX1_eD0s.js";import"./useButton-DWOjp9am.js";import"./useTextField-DFMZ_X7a.js";import"./useControlledState-ClRHpt7B.js";import"./useField-CQYkxF-b.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BNrkpxBV.js";import"./Dialog-Da-SWlK2.js";import"./OverlayArrow-C5KW7h6B.js";import"./useResizeObserver-B1GaWv2A.js";import"./Collection-BuczHZeG.js";import"./index-BUaloCqa.js";import"./Separator-UCsYKvEw.js";import"./SelectionManager-D7Mue2Gt.js";import"./useEvent-CAiAsPd-.js";import"./scrollIntoView-DM-drkgN.js";import"./SelectionIndicator-DYV-tJ5F.js";import"./useDescription-CbpbgZpl.js";import"./ListKeyboardDelegate-DXYbGQb8.js";import"./PressResponder-mOXTSlkp.js";import"./useLocalizedStringFormatter-DYrlcjyQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DQaKhkrO.js";import"./VisuallyHidden-U3iNeYKp.js";import"./useLocalizedStringFormatter-DLdmwgIu.js";import"./x-Bp-MKQY3.js";import"./createLucideIcon-C6FsdGc5.js";import"./Heading-4GV7JhNC.js";import"./info-DMlvZV8G.js";import"./Popover-CEmMDDc4.js";import"./Tag-DrzTbYyD.js";import"./ListBox-BEKEVb0W.js";import"./DragAndDrop-glGr6yV6.js";import"./inertValue-_l8_Y4bO.js";import"./useListState-DtZOLIKW.js";import"./useHighlightSelectionDescription-rLbNYYnR.js";import"./useUpdateEffect-aQoGn6D6.js";import"./useHasTabbableChild-KjHb41MV.js";import"./check-DU4U8GP2.js";import"./ListBoxSection-NRv8ly0b.js";import"./Virtualizer-DrO0aXB7.js";import"./chevron-down-CcUd2ypV.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BVHDSzhL.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

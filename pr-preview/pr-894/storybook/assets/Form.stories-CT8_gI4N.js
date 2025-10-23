import{j as n}from"./iframe-DDbpa8Wo.js";import{$ as j}from"./Form-ZJJxH9I9.js";import{G}from"./Grid-uP-kMqfl.js";import{G as e}from"./GridItem-IDYkNjdY.js";import{T as r}from"./TextField-B1ZVo5bY.js";import{S as I}from"./Select-CLnn5VxE.js";import{B as a}from"./Button-BPWGs-1W.js";import{R as g,a as b}from"./Radio-IvC7y_mN.js";import{C as h}from"./CheckboxGroup-C42akaO0.js";import{C as k}from"./Checkbox-IeykDL0d.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-jlLiSOU5.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B9uQjEGb.js";import"./useFocusRing-B2lzx1MC.js";import"./index-Dja4pRt0.js";import"./index-uO7TUWN4.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CnOnyZyc.js";import"./TextField-p6Xb_xRS.js";import"./FieldError-CCCoe3JU.js";import"./Text-B3yfedCA.js";import"./Text-B81UqMSI.js";import"./RSPContexts-B93NyvWN.js";import"./Group-AGJk3WVH.js";import"./Input-BrHTPnFW.js";import"./Hidden-DxwpsZCD.js";import"./Button-i1nqo65F.js";import"./useLabels-CPw4TDXs.js";import"./useButton-BEbfWm77.js";import"./useTextField-2ULvL_N6.js";import"./useControlledState-Bh8mog-M.js";import"./useField-BoafLZN3.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-DLXSRKLt.js";import"./Dialog-BSN_iDQ7.js";import"./OverlayArrow-D5o0J-sC.js";import"./useResizeObserver-B1KNU6Pn.js";import"./Collection-DVvyo599.js";import"./index-Ic-MDbNF.js";import"./Separator-G03E4pgI.js";import"./SelectionManager-CsoY54RO.js";import"./useEvent-LrcyaZXF.js";import"./scrollIntoView-C8tZc1yI.js";import"./SelectionIndicator-JhfTPfWb.js";import"./useDescription-SMJZKPJ7.js";import"./ListKeyboardDelegate-CiMWzmFM.js";import"./PressResponder-9xNeWVd4.js";import"./useLocalizedStringFormatter-CJ-tUvmV.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CCIrNu25.js";import"./VisuallyHidden-tXEXRJlN.js";import"./useLocalizedStringFormatter-CpTrBb6y.js";import"./x-qYL0qdqx.js";import"./createLucideIcon-B1IU6l-Z.js";import"./Heading-To6moAdZ.js";import"./info-CwHohGkc.js";import"./Popover-DuPlCKRv.js";import"./Tag-DbB4mAmD.js";import"./ListBox-Dawicsdt.js";import"./DragAndDrop-C9VFY2j_.js";import"./inertValue-CXpRq184.js";import"./useListState-CbdsMv48.js";import"./useHighlightSelectionDescription-CkpDQmnj.js";import"./useUpdateEffect-Bv8VsCcb.js";import"./useHasTabbableChild-CeG3NBdj.js";import"./check-CzaPhtrm.js";import"./ListBoxSection-UYILWkCw.js";import"./Virtualizer-CsrqmMl8.js";import"./chevron-down-B8JbS2IS.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-CjLLnd5f.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

import{j as n}from"./iframe-CC0FN-Zc.js";import{$ as j}from"./Form-fUtp7Mxf.js";import{G}from"./Grid-CevzinTZ.js";import{G as e}from"./GridItem-BJHsm__O.js";import{T as r}from"./TextField-COVSNot_.js";import{S as I}from"./Select-CI1TfINa.js";import{B as a}from"./Button-CA2Kl9Gs.js";import{R as g,a as b}from"./Radio-DhV0TGQG.js";import{C as h}from"./CheckboxGroup-Dtc9uJRG.js";import{C as k}from"./Checkbox-Cy93SfdE.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DYyx-hw9.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-3HoB4CSs.js";import"./useFocusRing-DhymJvUy.js";import"./index-CZXq9gDj.js";import"./index-BLBSd2CN.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-MBaZfdK9.js";import"./TextField-Dtq5sKPF.js";import"./FieldError-Bn-JtppU.js";import"./Text-6NVO-7ma.js";import"./Text-DsE8xVx7.js";import"./RSPContexts-D29TubGX.js";import"./Group-Ru0JKGpf.js";import"./Input-TnECrmFx.js";import"./Hidden-Dge5NQFv.js";import"./Button-DR1h6H_B.js";import"./useLabels-D2XAUmU8.js";import"./useButton-BOxNHzcY.js";import"./useTextField-gOaXZLLm.js";import"./useControlledState-Bu3OMakX.js";import"./useField-B3LDTL7d.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BEn80LOu.js";import"./Dialog-BoEzWq99.js";import"./OverlayArrow-DtiQ1wx-.js";import"./useResizeObserver-CeC3gjU-.js";import"./Collection-VnhZNeRt.js";import"./index-B2RrP9iC.js";import"./Separator-Cy8S0hmR.js";import"./SelectionManager-CpVu-w-P.js";import"./useEvent-BFqd8kcv.js";import"./scrollIntoView-MJhnHTZE.js";import"./SelectionIndicator-CP2-md6V.js";import"./useDescription-CPT5dREO.js";import"./ListKeyboardDelegate-CGa9P5lk.js";import"./PressResponder-CDq_hUGv.js";import"./useLocalizedStringFormatter-DdEpa8yh.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CYLBRnz1.js";import"./VisuallyHidden-CwTHbwKe.js";import"./useLocalizedStringFormatter-lvyNrT1o.js";import"./x-MgGLfh0u.js";import"./createLucideIcon-B44Lr7tO.js";import"./Heading-fCeftbdj.js";import"./info-s00kpiJo.js";import"./Popover-CngPh6II.js";import"./Tag-BboUYYtw.js";import"./ListBox-DYGESgNN.js";import"./DragAndDrop-DLoPBIdY.js";import"./inertValue-CHbjgOHK.js";import"./useListState-DIJ6Dv-B.js";import"./useHighlightSelectionDescription-D7VfSzZE.js";import"./useUpdateEffect-efX8dzaX.js";import"./useHasTabbableChild-C7IbJy-_.js";import"./check-DFUxtGoa.js";import"./ListBoxSection-BUfWJ1b5.js";import"./Virtualizer-BtqJowkz.js";import"./chevron-down-Ds50r4qM.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-gjjvMYfB.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

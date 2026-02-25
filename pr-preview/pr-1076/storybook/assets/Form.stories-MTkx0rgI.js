import{j as e}from"./iframe-C9ubgLgC.js";import{$ as c}from"./Form-DjrwUDpY.js";import{G as d}from"./Grid-ByPySttp.js";import{G as i}from"./GridItem-BTiTA0jM.js";import{a as x,R as u}from"./Radio-HTV59obl.js";import{C as I}from"./CheckboxGroup-DsIQh2ML.js";import{C as G}from"./Checkbox-CykhvZlM.js";import{T as t}from"./TextField-EB1DkGxP.js";import{S as l}from"./Select-D9DjJBnB.js";import{L as p}from"./ListBoxItem-C_rkVZki.js";import{B as a}from"./Button-Dt-Z81qJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DGXfXGIv.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-XFKbkoIj.js";import"./useFocusRing-4O8j9jv4.js";import"./index-BNV1MXTe.js";import"./index-Bwb2HpPH.js";import"./clsx-Ciqy0D92.js";import"./Group-BLPeyaTg.js";import"./FieldError-CVXyG8VI.js";import"./Text-DzDyHzow.js";import"./Text-CL8RRho7.js";import"./Button-BlG7CmiH.js";import"./Hidden-Azh09GXQ.js";import"./useLabels-Df_ryvuT.js";import"./useButton-DfAsmtKq.js";import"./SelectionIndicator-tP0gd4qo.js";import"./useField-CbMf_VdX.js";import"./VisuallyHidden-BHt-U9wp.js";import"./useControlledState-DqLuvFKD.js";import"./Label-BPDF15KZ.js";import"./Dialog-C3BieIKE.js";import"./RSPContexts-Dm9gjtI5.js";import"./OverlayArrow-COpJvv1L.js";import"./useResizeObserver-o0TjWYde.js";import"./Collection-DTwVVniI.js";import"./index-D11ngsUp.js";import"./Separator-CcuL_uLD.js";import"./SelectionManager-D2OfJ91j.js";import"./useEvent-BMkaTr7g.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DsXkWwWK.js";import"./ListKeyboardDelegate-DEcFwDZ4.js";import"./PressResponder-DaCcp4oE.js";import"./useLocalizedStringFormatter-bbG7Wq0q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BjkY83sA.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BMYCRDHP.js";import"./createLucideIcon-SsBWnnbL.js";import"./useLocalizedStringFormatter-Bh2zxf8s.js";import"./Heading-DDcJA1Gn.js";import"./info-CcMvzH2B.js";import"./Popover-D7_SYJfl.js";import"./check-DKUqkjmL.js";import"./useToggleState-CMSB8Xb-.js";import"./TextFieldBase-CwgmyAA9.js";import"./Input-CfsmOenP.js";import"./useTextField-D64FrxUa.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-K9kDJZmi.js";import"./DragAndDrop-dyCBDJS4.js";import"./inertValue-0HzhSkwD.js";import"./useListState-Eb3ClKYr.js";import"./TagGroup-BmJZ51ry.js";import"./useHighlightSelectionDescription-Bqv2CAA3.js";import"./useUpdateEffect-D5ZW9iOq.js";import"./useHasTabbableChild-Bw50mSa7.js";import"./chevron-down-CFAKZDiT.js";import"./Virtualizer-Chrxc53l.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};

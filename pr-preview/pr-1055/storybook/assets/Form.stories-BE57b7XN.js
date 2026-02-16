import{j as e}from"./iframe-kL-Bl9su.js";import{$ as c}from"./Form-75sFirUb.js";import{G as d}from"./Grid-DDcnq3fL.js";import{G as i}from"./GridItem-xdAdL_er.js";import{a as x,R as u}from"./Radio-akRQ4_lN.js";import{C as I}from"./CheckboxGroup-DZRH0H_2.js";import{C as G}from"./Checkbox-Btl38iGy.js";import{T as t}from"./TextField-CRs2LOGJ.js";import{S as l}from"./Select-kyvPFLsg.js";import{L as p}from"./ListBoxItem-B-kOH64f.js";import{B as a}from"./Button-BrThkrNe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DSQv1swn.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BcwglGOS.js";import"./useFocusRing-B8gpdiRk.js";import"./index-9Z-HIz-6.js";import"./index-Dc0KIhb6.js";import"./clsx-Ciqy0D92.js";import"./Group-BxXfwbL_.js";import"./FieldError-CmUNHjx9.js";import"./Text-Csjavnr3.js";import"./Text-Brx6h1NF.js";import"./Button-C3MzL_5z.js";import"./Hidden-fIPo0I_L.js";import"./useLabels-CH1yRhK0.js";import"./useButton-PS6G0SsP.js";import"./SelectionIndicator-B4koSPdu.js";import"./useField-sDMwGprV.js";import"./VisuallyHidden-Ddmz6g6z.js";import"./useControlledState-CCkzC0Tp.js";import"./Label-CYOh3wjp.js";import"./Dialog-4DXEqqMA.js";import"./RSPContexts-zPihLAoF.js";import"./OverlayArrow-C-_NKgJm.js";import"./useResizeObserver-JmlDC1iB.js";import"./Collection-V9ENYK9P.js";import"./index-C6yzV3k4.js";import"./Separator-CIUFat57.js";import"./SelectionManager-ALK4G4BP.js";import"./useEvent-BRxC_QDj.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D6WKBftS.js";import"./ListKeyboardDelegate-C_l6nDbK.js";import"./PressResponder-CtQHFhUR.js";import"./useLocalizedStringFormatter-5N1OdqKK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D3IxBebN.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-NxB05lgA.js";import"./createLucideIcon-DoVMa1bS.js";import"./useLocalizedStringFormatter-DhEyUNPu.js";import"./Heading-Cgt_XEMz.js";import"./info-Bp8dfPQ3.js";import"./Popover-CH8aGv-F.js";import"./check-B_KzR74M.js";import"./useToggleState-Cp_yD_Z3.js";import"./TextFieldBase-B6ST6E4I.js";import"./Input-Cl7tvKed.js";import"./useTextField-ChLbIJms.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Duorv_sx.js";import"./DragAndDrop-DWQ6Io-Q.js";import"./inertValue-CYl0Ocmh.js";import"./useListState-B6etSU9m.js";import"./Tag-Bgq7MaK5.js";import"./useHighlightSelectionDescription-DaAT62Y4.js";import"./useUpdateEffect-D0hpnuY1.js";import"./useHasTabbableChild-CKcBsHy8.js";import"./chevron-down-CB_L2-6l.js";import"./Virtualizer-Hof3OQDd.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

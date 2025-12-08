import{j as e}from"./iframe-CcqIJJ9I.js";import{$ as c}from"./Form-vl_Yipqa.js";import{G as d}from"./Grid-B9v0BcN4.js";import{G as i}from"./GridItem-CCl3l61o.js";import{T as t}from"./TextField-myy6f9GX.js";import{S as l}from"./Select-1JCYXNMp.js";import{B as a}from"./Button-Y2MdeHyb.js";import{R as x,a as u}from"./Radio-BHFsfLqS.js";import{C as I}from"./CheckboxGroup-DbTw8Zks.js";import{C as G}from"./Checkbox-BpOI6RPf.js";import{L as p}from"./ListBoxItem-Da_g-NiC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CY4Fu9XG.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DfdnZYhb.js";import"./useFocusRing-C6yLInR-.js";import"./index-BZYrye5E.js";import"./index-Dk_EVKVa.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Yw24ZpoX.js";import"./TextField-C4RW6-Ph.js";import"./FieldError-DCWhyVe8.js";import"./Text-BeMrApc1.js";import"./Text-B2y69JCA.js";import"./RSPContexts-DAOG_PEF.js";import"./Group-C4Ty3NtD.js";import"./Input-jvNmZG-C.js";import"./Hidden-DoPVqW9a.js";import"./Button-g0SRrwOY.js";import"./useLabels-BilCN1NI.js";import"./useButton-DY6rqluc.js";import"./useTextField-CDwkbzfc.js";import"./useControlledState-DFeihBKm.js";import"./useField-Dtd65B1y.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Bn_G3knm.js";import"./Dialog-6IaWqWsz.js";import"./OverlayArrow-7jeERZda.js";import"./useResizeObserver-CInyPDqE.js";import"./Collection-DptOGsU8.js";import"./index-CdKsVf5O.js";import"./Separator-aU5CSZY5.js";import"./SelectionManager-CuK7wIFL.js";import"./useEvent-C1dfxzp6.js";import"./scrollIntoView-BY6i16iw.js";import"./SelectionIndicator-DxGLI-9G.js";import"./useDescription-Bm_U4g4C.js";import"./ListKeyboardDelegate-DUBgQ1Yz.js";import"./PressResponder-gIDAusRx.js";import"./useLocalizedStringFormatter-C2Q5ZqZK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B2_RuOXm.js";import"./VisuallyHidden-BbrVFRLR.js";import"./x-CLF4Fkuz.js";import"./createLucideIcon-Ba6CVsaC.js";import"./useLocalizedStringFormatter-Dvdqua-f.js";import"./Heading-_hPmccnH.js";import"./info-wmRn54vg.js";import"./Popover-CTjC1vhw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-0a9WwHPT.js";import"./DragAndDrop-BZvC-7Lw.js";import"./inertValue-Cg1G-1Hw.js";import"./useListState-XmYKVcgi.js";import"./Tag-Dcj5qVj3.js";import"./useHighlightSelectionDescription-BVMHDLcq.js";import"./useUpdateEffect-Bfp5eam7.js";import"./useHasTabbableChild-CP6IbiY4.js";import"./chevron-down-7goiZrI1.js";import"./Button.module-Co5e5YHp.js";import"./check-CcGc5TGs.js";import"./useToggleState-h0opYNOu.js";import"./Virtualizer-CRvDlCri.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

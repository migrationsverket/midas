import{j as e}from"./iframe-aMoIVDeR.js";import{$ as c}from"./Form-vpgZxQyd.js";import{G as d}from"./Grid-DmFKyTO1.js";import{G as i}from"./GridItem-BKMYiRgm.js";import{T as t}from"./TextField-1ANbJ7tV.js";import{S as l}from"./Select-o5DCUtuN.js";import{B as a}from"./Button-CD86P0d9.js";import{R as x,a as u}from"./Radio-aqw9xsm_.js";import{C as I}from"./CheckboxGroup-Bi5-LvKW.js";import{C as G}from"./Checkbox-kR-iWFxN.js";import{L as p}from"./ListBoxItem-BqIPo-DV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CFxRfzzc.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BsUJefcp.js";import"./useFocusRing-DlrmdZPs.js";import"./index-DBBzqi9Z.js";import"./index-srgIOSWI.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Dro7y4Zh.js";import"./TextField-i6btZtPJ.js";import"./FieldError-D2QhEaby.js";import"./Text-p3-kB6K4.js";import"./Text-BbmTTQ6z.js";import"./RSPContexts-CsPbAcKW.js";import"./Group-DVLfXosT.js";import"./Input-CCvRDKGH.js";import"./Hidden-B6fG37sh.js";import"./Button-DiQ7-ULm.js";import"./useLabels-akov2npX.js";import"./useButton-CkIEgbAm.js";import"./useTextField-o81z82YN.js";import"./useControlledState-CJ6hso62.js";import"./useField-OOJAedGL.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Cr-RgogP.js";import"./Dialog-BZgDU0MB.js";import"./OverlayArrow-DjyVFsBr.js";import"./useResizeObserver-Ch37w8wK.js";import"./Collection-BRRSJjSx.js";import"./index-B-dZTbiu.js";import"./Separator-B1yutxcT.js";import"./SelectionManager-DfJKODKa.js";import"./useEvent-C22glenQ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ZXABDpq1.js";import"./useDescription-DuoNJ0JY.js";import"./ListKeyboardDelegate-t-hrFPYX.js";import"./PressResponder-DWmFqZGG.js";import"./useLocalizedStringFormatter-A5HFr0Ya.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-1e2Ye0X0.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DdIi_TPZ.js";import"./x-7JaraCCs.js";import"./createLucideIcon-Bt3zLjO1.js";import"./useLocalizedStringFormatter-D-L8R7Fq.js";import"./Heading-BfhUreNf.js";import"./info-Bfm3_TnE.js";import"./Popover-BwGpQo_H.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CjrhavOT.js";import"./DragAndDrop-BVfAVMMt.js";import"./inertValue-IthZYYUB.js";import"./useListState-DTVMNkfs.js";import"./Tag-B9aKjkSo.js";import"./useHighlightSelectionDescription-BtUuJT29.js";import"./useUpdateEffect-BbQ-jpPv.js";import"./useHasTabbableChild-Cq4bzFAl.js";import"./chevron-down-C6AkMwjm.js";import"./Button.module-Co5e5YHp.js";import"./check-DMb1vxPn.js";import"./useToggleState-2XUYBxOG.js";import"./Virtualizer--J-bJAKi.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};

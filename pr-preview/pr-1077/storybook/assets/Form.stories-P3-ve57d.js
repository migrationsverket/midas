import{j as e}from"./iframe-Dp43kgFY.js";import{$ as c}from"./Form-CLRQAu8w.js";import{G as d}from"./Grid-DICyln7B.js";import{G as i}from"./GridItem-8vqMBzNK.js";import{a as x,R as u}from"./Radio-Dxjd8iB9.js";import{C as I}from"./CheckboxGroup-kebaaBcN.js";import{C as G}from"./Checkbox-D9r1QFFO.js";import{T as t}from"./TextField-CI4ZxIv-.js";import{S as l}from"./Select-CGSFTsef.js";import{L as p}from"./ListBoxItem-CibZePJn.js";import{B as a}from"./Button-O1BOKm9x.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CQURC1dK.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B7nz_rt_.js";import"./useFocusRing-DuecCpf4.js";import"./index-l95OD-BB.js";import"./index-DdtjAW4o.js";import"./clsx-Ciqy0D92.js";import"./Group-BKdMgwtw.js";import"./FieldError-fHEQddPz.js";import"./Text-CqEImv_2.js";import"./Text-Bo7dFu1i.js";import"./Button-Bq7x_9-Y.js";import"./Hidden-ypOha8Sj.js";import"./useLabels-COsyDR1S.js";import"./useButton-D3tp8nbg.js";import"./SelectionIndicator-oQR-g-8x.js";import"./useField-BlDlosfz.js";import"./VisuallyHidden-DkuOGL8E.js";import"./useControlledState-DJq_g7YW.js";import"./Label-hHB44W8u.js";import"./Dialog-BIhM1PAG.js";import"./RSPContexts-ChoQx1hy.js";import"./OverlayArrow-DNqvtwwY.js";import"./useResizeObserver-HjKUFyYm.js";import"./Collection-D2xmrWHG.js";import"./index-B5mME82v.js";import"./Separator-Z9nQDNqM.js";import"./SelectionManager-DtayW_nU.js";import"./useEvent-DT_nKyT3.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CTRJEwnt.js";import"./ListKeyboardDelegate-Cmq15C0M.js";import"./PressResponder-SHPYMhEz.js";import"./useLocalizedStringFormatter-MZozDBHj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-COrJ4GSf.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DGEzAbXD.js";import"./createLucideIcon-D72gX86M.js";import"./useLocalizedStringFormatter-Co-CJ4tv.js";import"./Heading-DZgEA9s4.js";import"./info-LNHF0vvQ.js";import"./Popover-BV4Mt4D0.js";import"./check-C_PYEOSU.js";import"./useToggleState-B1ToPzLo.js";import"./TextFieldBase-DtfFwauT.js";import"./Input-6CkdRDdh.js";import"./useTextField-BU47s5IU.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DTE1Fyg5.js";import"./DragAndDrop-DnPU_amI.js";import"./inertValue-CUuvnDgD.js";import"./useListState-DlO_1eV0.js";import"./TagGroup-CsSo5j4u.js";import"./useHighlightSelectionDescription-zGWauYLg.js";import"./useUpdateEffect-BwARvU8J.js";import"./useHasTabbableChild-CR78PjY6.js";import"./chevron-down-BW_2nP8b.js";import"./Virtualizer-C_Mku9FK.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

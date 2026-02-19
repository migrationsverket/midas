import{j as e}from"./iframe-D6sKX6II.js";import{$ as c}from"./Form-C2GRFxHm.js";import{G as d}from"./Grid-DbVwVySm.js";import{G as i}from"./GridItem-BWQqrIDt.js";import{a as x,R as u}from"./Radio-Bky5JFtK.js";import{C as I}from"./CheckboxGroup-CjipElTl.js";import{C as G}from"./Checkbox-CXHOTFSU.js";import{T as t}from"./TextField-BYjDzEiM.js";import{S as l}from"./Select-CTaJNycy.js";import{L as p}from"./ListBoxItem-E1_WeW0E.js";import{B as a}from"./Button-DCKGBAMV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C4RQL2_3.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bj3o2lyS.js";import"./useFocusRing-CSkB88rB.js";import"./index-DKBJrd3a.js";import"./index-DDUPyWG3.js";import"./clsx-Ciqy0D92.js";import"./Group-LKMayg1L.js";import"./FieldError-Bvl7FuR6.js";import"./Text-BrckZ8Xv.js";import"./Text-jsf--eUF.js";import"./Button-BaCPfcFA.js";import"./Hidden-DGXb4i6s.js";import"./useLabels-Eanys-W7.js";import"./useButton-QkYGdCiT.js";import"./SelectionIndicator-BuDLJhSH.js";import"./useField-2xmZNmwq.js";import"./VisuallyHidden-D9YxITQY.js";import"./useControlledState-lIXa58Dk.js";import"./Label-D-sWFEsc.js";import"./Dialog-CABw0W6S.js";import"./RSPContexts-DvpaVa_O.js";import"./OverlayArrow-V9Eb3cRx.js";import"./useResizeObserver-pDOO4CWr.js";import"./Collection-D2vS0JJK.js";import"./index-UPahk6AO.js";import"./Separator-BrNCWKzO.js";import"./SelectionManager-Bng19qqy.js";import"./useEvent-DGV7xSYV.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-kimTwMt1.js";import"./ListKeyboardDelegate-Cx41C5kb.js";import"./PressResponder-C6vxJpG9.js";import"./useLocalizedStringFormatter-CWLwTKjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-uOUtYkvb.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-2XwCJpa2.js";import"./createLucideIcon-sDHC6FPE.js";import"./useLocalizedStringFormatter-CajHjEjY.js";import"./Heading-DbyuvViy.js";import"./info-CiAq7Cly.js";import"./Popover-gkXA_BBE.js";import"./check-DAl-Lpzb.js";import"./useToggleState-Bi0UME5t.js";import"./TextFieldBase-DEyPItQ8.js";import"./Input-_82U7G9G.js";import"./useTextField-DiqMn53V.js";import"./TextField.module-DBQiRr7K.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DxSoUGNg.js";import"./DragAndDrop-Bm03oYWM.js";import"./inertValue-DDIbgMkM.js";import"./useListState-DendIGIf.js";import"./TagGroup-CYk9KZv1.js";import"./useHighlightSelectionDescription-aQO4yv39.js";import"./useUpdateEffect-jRDz-o72.js";import"./useHasTabbableChild-ComoWpwq.js";import"./chevron-down-PNKHxjNZ.js";import"./Virtualizer-CQthI8ZJ.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

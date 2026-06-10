import{j as e}from"./iframe-y1u__L-8.js";import{c}from"./Form-CePOgkA4.js";import{G as d}from"./Grid-CYzdzYjJ.js";import{G as i}from"./GridItem-CVRSl1bC.js";import{a as x,R as u}from"./Radio-BDDMbDLm.js";import{C as I}from"./CheckboxGroup-BAKAbjfQ.js";import{C as G}from"./Checkbox-DUlQsQoZ.js";import{T as t}from"./TextField-g7luDz-h.js";import{S as l}from"./Select-zQ0zrjtH.js";import{L as p}from"./ListBoxItem-DnzNl9sr.js";import{B as a}from"./Button-DsGM-uqm.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DrPDMwIf.js";import"./utils-Da8nMI6o.js";import"./clsx-B-dksMZM.js";import"./index-sWYRQAk2.js";import"./index-BS1A8_4R.js";import"./clsx-Ciqy0D92.js";import"./Group-rrSAIQbm.js";import"./FieldError-B3ZCLrVr.js";import"./Text-LCGDIWeJ.js";import"./Text-DI19gscT.js";import"./Button-Bmc3JOkJ.js";import"./Hidden-DTarpjft.js";import"./useLabel-DdR6Ey9N.js";import"./useLabels-DIWDgD-T.js";import"./useButton-DFds5nbV.js";import"./SelectionIndicator-Dr5bwis_.js";import"./useField-DeQcEKMo.js";import"./VisuallyHidden-vMJRuQeL.js";import"./useControlledState-SL3CCMLy.js";import"./Label-DALoe-87.js";import"./Dialog-BiNhJBI-.js";import"./RSPContexts-BzgKoUFY.js";import"./OverlayArrow-DPD6R6ym.js";import"./useResizeObserver-DxXypk8I.js";import"./Collection-BXQTs4xV.js";import"./index-DpYlLRD4.js";import"./Separator-QJJ7D4Tg.js";import"./SelectionManager-C7uieu2B.js";import"./useEvent-BdW-8kO2.js";import"./scrollIntoView-DPjPSgYg.js";import"./useDescription-C868_Zy-.js";import"./ListKeyboardDelegate-CotMEVTu.js";import"./PressResponder-Ci85RzOj.js";import"./useLocalizedStringFormatter-BaM5UMu5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C4rEa8ur.js";import"./getScrollParent-DOFnmN7L.js";import"./ModalOverlay-CNEMfCp8.js";import"./x-WeprrzHp.js";import"./createLucideIcon-C_M4Trqf.js";import"./useLocalizedStringFormatter-BeHCnKuu.js";import"./Heading-C9dBce2x.js";import"./info-D_CiA-_d.js";import"./Popover-CtuY2he5.js";import"./check-BGJ1UnCb.js";import"./useToggleState-CgzLupYO.js";import"./TextFieldBase-Bt2td0qT.js";import"./Input-Duc0d2AL.js";import"./useTextField-dwu892YK.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CT9WNNZc.js";import"./DragAndDrop-CmKgWrzU.js";import"./inertValue-CegHRPzz.js";import"./useListState-DebTt2uP.js";import"./TagGroup-D9MHQqPy.js";import"./useHighlightSelectionDescription-CSg2nrFS.js";import"./useUpdateEffect-DtM5mrux.js";import"./useHasTabbableChild-BflOYvo9.js";import"./chevron-down-DFlNb566.js";import"./Virtualizer-CkmOdLit.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

import{j as e}from"./iframe-Co4-ZyV5.js";import{$ as c}from"./Form-5LJYEI1L.js";import{G as d}from"./Grid-CiyUd0LB.js";import{G as i}from"./GridItem-BNfzEWM8.js";import{T as t}from"./TextField-CeVS9SBu.js";import{S as l}from"./Select-DW8C-iNs.js";import{B as a}from"./Button-DLfCs3xE.js";import{R as x,a as u}from"./Radio-DwgE16pZ.js";import{C as I}from"./CheckboxGroup-C54Gx1HN.js";import{C as G}from"./Checkbox-BFHRE8Ap.js";import{L as p}from"./ListBoxItem-CeeSs2cx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-vPvXRE8s.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CI-48dgm.js";import"./useFocusRing-CbWbCyA2.js";import"./index-D1TXxQim.js";import"./index-BKiR4w34.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CdkaPIoY.js";import"./TextField-plfI76Av.js";import"./FieldError-CSfnBoG7.js";import"./Text-Bx2UjQld.js";import"./Text-CUkg7ETr.js";import"./RSPContexts-tZwB9aRP.js";import"./Group-DOtvSo3k.js";import"./Input-CHek4FOn.js";import"./Hidden-CYasrRch.js";import"./Button-vLKPKh4I.js";import"./useLabels-K3nzkU17.js";import"./useButton-D9ay2y--.js";import"./useTextField-CRtyHqAT.js";import"./useControlledState-DDOdSbPg.js";import"./useField-_kwhBzfX.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Cg0PnWuC.js";import"./Dialog-Dud2RglH.js";import"./OverlayArrow-CQ5am-7L.js";import"./useResizeObserver-Dt5BqhmZ.js";import"./Collection-BuZqzAjC.js";import"./index-9onNA-i4.js";import"./Separator-CWMT8vJ-.js";import"./SelectionManager-D8RWiL9F.js";import"./useEvent-DQKm_hMB.js";import"./scrollIntoView-DG1uVoNN.js";import"./SelectionIndicator-Brr7wOT6.js";import"./useDescription-COIi7tGW.js";import"./ListKeyboardDelegate-livHJMAo.js";import"./PressResponder-k3eT1X3U.js";import"./useLocalizedStringFormatter-BWJA3tAg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-XNd_6Ui7.js";import"./VisuallyHidden-BuTNJIhE.js";import"./x-Dz3fvaRV.js";import"./createLucideIcon-B4KpWunU.js";import"./useLocalizedStringFormatter-2nFP8uYy.js";import"./Heading-AMjd11G8.js";import"./info-CvdA68jv.js";import"./Popover-FzGA_rZP.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DeCZnYdI.js";import"./DragAndDrop-OLRKka75.js";import"./inertValue-IlbyZ2h1.js";import"./useListState-Dxxbu5Nx.js";import"./Tag-Cnz1Z5CP.js";import"./useHighlightSelectionDescription-DjbmgfIB.js";import"./useUpdateEffect-DWbAE-mV.js";import"./useHasTabbableChild-DmRMWuXP.js";import"./chevron-down-i5ac69kX.js";import"./Button.module-Co5e5YHp.js";import"./check-CHDnd_Y_.js";import"./useToggleState-Du3JTmev.js";import"./Virtualizer-C89z5wBv.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

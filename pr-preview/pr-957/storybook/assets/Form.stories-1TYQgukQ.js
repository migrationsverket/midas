import{j as e}from"./iframe-BtMwOEiM.js";import{$ as c}from"./Form-DVMMKosO.js";import{G as d}from"./Grid-o55LW4-i.js";import{G as i}from"./GridItem-DKFFpeoC.js";import{T as t}from"./TextField-BHT8r-mO.js";import{S as l}from"./Select-uq5dgPhA.js";import{B as a}from"./Button-Bs1OmtnK.js";import{R as x,a as u}from"./Radio-Dnkf7C8t.js";import{C as I}from"./CheckboxGroup-CpRtcMEa.js";import{C as G}from"./Checkbox-DsyIqB0T.js";import{L as p}from"./ListBoxItem-BPOFJQjE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BoP-oma8.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C0gaMIqj.js";import"./useFocusRing-Cle0ZmwX.js";import"./index-BBjSt18z.js";import"./index-YFvqANbg.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-mAmZ6lIc.js";import"./TextField-CvzKwD2n.js";import"./FieldError-D_5OLq9A.js";import"./Text-BIvd2lWW.js";import"./Text-Blq4VDAx.js";import"./RSPContexts-DnH5Czok.js";import"./Group-dKmt0uPR.js";import"./Input-C5nicdnx.js";import"./Hidden-4SQq7b_R.js";import"./Button-DpK-_iud.js";import"./useLabels-6uMyjyEX.js";import"./useButton-D4UG4PHy.js";import"./useTextField-CBDzCWqG.js";import"./useControlledState-4eQ4VJ_x.js";import"./useField-DWqLAcPx.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DY5S-zxp.js";import"./Dialog-B9C9duPY.js";import"./OverlayArrow-CfUGNIky.js";import"./useResizeObserver-DWfhUb69.js";import"./Collection-DSw0Co_i.js";import"./index-3O6tGQUW.js";import"./Separator-CqzvGCIB.js";import"./SelectionManager-DuSnioHk.js";import"./useEvent-Bpvasb0c.js";import"./scrollIntoView-7ZxtPAx0.js";import"./SelectionIndicator-t4ESMKeX.js";import"./useDescription-larqa2bq.js";import"./ListKeyboardDelegate-Prucwfh4.js";import"./PressResponder-DpSlFNy6.js";import"./useLocalizedStringFormatter-DCuMM2e9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent--egNNwF2.js";import"./VisuallyHidden-DmeEZsXF.js";import"./x-BtjPiESg.js";import"./createLucideIcon-C3W8dNhU.js";import"./useLocalizedStringFormatter-DETAsxuF.js";import"./Heading-B4LhT9pb.js";import"./info-DvZlWYzP.js";import"./Popover-CFi8PJaH.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DjvqbMW4.js";import"./DragAndDrop-Cfj-gPcP.js";import"./inertValue-DWD3kxIK.js";import"./useListState-BUCBO1Bw.js";import"./Tag-BlyOFkZv.js";import"./useHighlightSelectionDescription-CrMe5zHC.js";import"./useUpdateEffect-zYcRPFa1.js";import"./useHasTabbableChild-B3HotSi3.js";import"./chevron-down-CS4zsjOo.js";import"./Button.module-Co5e5YHp.js";import"./check-u1_5_ilx.js";import"./useToggleState-_4itN8Ok.js";import"./Virtualizer-Cv4TwZ_F.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

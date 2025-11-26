import{j as e}from"./iframe-g7NEJkuC.js";import{$ as c}from"./Form-DORkrEre.js";import{G as d}from"./Grid-DGI0NyAH.js";import{G as i}from"./GridItem-Cl75rLHl.js";import{T as t}from"./TextField-CZUF6V38.js";import{S as l}from"./Select-DAoGt7HN.js";import{B as a}from"./Button-wkNo0dzg.js";import{R as x,a as u}from"./Radio-oUU58SBi.js";import{C as I}from"./CheckboxGroup-CRK4PpXH.js";import{C as G}from"./Checkbox-BpjAUdfw.js";import{L as p}from"./ListBoxItem-BEFp_KXe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-0G2rZpWX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-pQBCJ-I-.js";import"./useFocusRing-umR6fa2b.js";import"./index-CHObnUG4.js";import"./index-D3ZTBEsf.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DnehCmF9.js";import"./TextField-CQFo2G_e.js";import"./FieldError-BxotCqXX.js";import"./Text-2wl8S3yv.js";import"./Text-COXbJ1k6.js";import"./RSPContexts-DnvA1an_.js";import"./Group-CQ2OBqNb.js";import"./Input-2cfmIX1O.js";import"./Hidden-D0w2WJXS.js";import"./Button-DLz7qxXY.js";import"./useLabels-CaMMn4xN.js";import"./useButton-DLlC1wR-.js";import"./useTextField-DPgzgftV.js";import"./useControlledState-BfrgZwaU.js";import"./useField-TSEdftWR.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DsL0jyv0.js";import"./Dialog-UNwVDvyc.js";import"./OverlayArrow-C3diIVx5.js";import"./useResizeObserver-BzoJpgxS.js";import"./Collection-D6GjZd23.js";import"./index-fx8RI-wG.js";import"./Separator-DMTf5PvF.js";import"./SelectionManager-BRgBdon6.js";import"./useEvent-B-pgGpBm.js";import"./scrollIntoView-BhdzKXRp.js";import"./SelectionIndicator-nYxq64Nb.js";import"./useDescription-Q7smjSa7.js";import"./ListKeyboardDelegate-Bwr0wyqx.js";import"./PressResponder-NQTQ9Dq3.js";import"./useLocalizedStringFormatter-Ck5RdZog.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DPVMq2vt.js";import"./VisuallyHidden-DsC2d4kL.js";import"./x-BwjZIwdP.js";import"./createLucideIcon-968lwoO8.js";import"./useLocalizedStringFormatter-BH3Jo7uS.js";import"./Heading-Cuo-BxH3.js";import"./info-6B8gOvS_.js";import"./Popover-b7Xkp_a6.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DjyIDkV0.js";import"./DragAndDrop-nV86DVN5.js";import"./inertValue-CKxuhjq5.js";import"./useListState-CI6sgg3-.js";import"./Tag-DmFW6C8s.js";import"./useHighlightSelectionDescription-btgfnW6v.js";import"./useUpdateEffect-DZB4_S79.js";import"./useHasTabbableChild-DPSuxxie.js";import"./chevron-down-BJOqO73m.js";import"./Button.module-CtQ1deO8.js";import"./check-DtowHjN5.js";import"./useToggleState-DiQROsZg.js";import"./Virtualizer-MmFTKbSD.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

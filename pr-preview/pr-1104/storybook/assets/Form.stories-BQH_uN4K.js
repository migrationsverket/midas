import{j as e}from"./iframe-DgqscTRS.js";import{$ as c}from"./Form-gm0DNf8-.js";import{G as d}from"./Grid-B445HWQp.js";import{G as i}from"./GridItem-BN9cmh3b.js";import{a as x,R as u}from"./Radio-D_zJm8Py.js";import{C as I}from"./CheckboxGroup-D1Z50e30.js";import{C as G}from"./Checkbox-DQxJPQsg.js";import{T as t}from"./TextField-CaHX_-MI.js";import{S as l}from"./Select-DeH_CgTY.js";import{L as p}from"./ListBoxItem-CBHVavUZ.js";import{B as a}from"./Button-CpE1Qe3l.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ihbz_05J.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-MoGwb86J.js";import"./useFocusRing-Dhh24Qf7.js";import"./index-BDRZoG0T.js";import"./index-BTEBzuGD.js";import"./clsx-Ciqy0D92.js";import"./Group-3IQ-nF4r.js";import"./FieldError-BVwBPTGy.js";import"./Text-DJuD0Zjj.js";import"./Text-BkGEZWiq.js";import"./Button-BI2DB5nm.js";import"./Hidden-CnPSLy5g.js";import"./useLabels-BVW64SDg.js";import"./useButton-CYDL-Eqv.js";import"./SelectionIndicator-CaTBieRu.js";import"./useField-C3Xp4KM5.js";import"./VisuallyHidden-anAyNDA7.js";import"./useControlledState-BxU5vAOZ.js";import"./Label-DRxYKUx7.js";import"./Dialog-LumjKnsf.js";import"./RSPContexts-CP-g27nm.js";import"./OverlayArrow-Bs0Iv0dX.js";import"./useResizeObserver-D-wRyK6D.js";import"./Collection-cGityvOE.js";import"./index-Cl8Gq0kx.js";import"./Separator-DukQr30q.js";import"./SelectionManager-ZcALuitN.js";import"./useEvent-BBYgrCp6.js";import"./scrollIntoView-Ch6Ee1HN.js";import"./useDescription-BEpuG-o8.js";import"./ListKeyboardDelegate-DFfkSN-z.js";import"./PressResponder-CCeCLGVE.js";import"./useLocalizedStringFormatter-Cwzoxtmk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D0j3Y2oO.js";import"./getScrollParent-CyRuL-ax.js";import"./x-DgcRhLbY.js";import"./createLucideIcon-vPVORsKq.js";import"./useLocalizedStringFormatter-CetFiEjn.js";import"./Heading-DV4kOouI.js";import"./info-L784nqvz.js";import"./Popover-BmXLViZy.js";import"./check-C7cLen_e.js";import"./useToggleState-CxXSRbOY.js";import"./TextFieldBase-BbA21SxJ.js";import"./Input-Bs7XEMiC.js";import"./useTextField-1gtjztzu.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DFR5VjEk.js";import"./DragAndDrop-1VEudIxj.js";import"./inertValue-C036g8V6.js";import"./useListState-BIwRrJz9.js";import"./TagGroup-BmJhHb_0.js";import"./useHighlightSelectionDescription-4bZTQhPn.js";import"./useUpdateEffect-CMQSa0bV.js";import"./useHasTabbableChild-DjsExBCU.js";import"./chevron-down-D_TnblBH.js";import"./Virtualizer-DkirWptz.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

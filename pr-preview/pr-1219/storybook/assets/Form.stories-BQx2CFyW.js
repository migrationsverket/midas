import{j as e}from"./iframe-Db_qDyjb.js";import{c}from"./Form-qvxF-3xc.js";import{G as d}from"./Grid-BajOUw2S.js";import{G as i}from"./GridItem-Dvbr3UOE.js";import{a as x,R as u}from"./Radio-CLnSVGl2.js";import{C as I}from"./CheckboxGroup-BRzGQ5zs.js";import{C as G}from"./Checkbox-B5rshVi1.js";import{T as t}from"./TextField-BqETpf1e.js";import{S as l}from"./Select-C8J0MRwF.js";import{L as p}from"./ListBoxItem-BOgErR5T.js";import{B as a}from"./Button-B6sBamwP.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CvFtjn9f.js";import"./utils-B1ump1uN.js";import"./clsx-B-dksMZM.js";import"./index-BrCAN2R3.js";import"./index-rXvRCXG4.js";import"./clsx-Ciqy0D92.js";import"./Group-Cr5jZpuK.js";import"./FieldError-3n-vV-Ng.js";import"./Text-DysxiSoS.js";import"./Text-CV2l2NwE.js";import"./Button-DmcShG5W.js";import"./Hidden-Ck1I1Pl6.js";import"./useLabel-79lcnvNd.js";import"./useLabels-DU_Qs8Z-.js";import"./useButton-DzefyB67.js";import"./SelectionIndicator-CJDW6T4U.js";import"./useField-C9_g4vAO.js";import"./VisuallyHidden-DI0T0a8c.js";import"./useControlledState-CW90Ui0G.js";import"./Label-DllQlIxW.js";import"./Dialog-CVNNM22j.js";import"./RSPContexts-vbQVcb1z.js";import"./OverlayArrow-1WvfEraS.js";import"./useResizeObserver-BaxQFQ-x.js";import"./Collection-DA76HGew.js";import"./index-3XjXCAx7.js";import"./Separator-CFJPzoDA.js";import"./SelectionManager-C3a8qmxp.js";import"./useEvent-BcyDDH_o.js";import"./scrollIntoView-mNDR3iIh.js";import"./useDescription-mlqK3r8Y.js";import"./ListKeyboardDelegate-Cd5NcBIV.js";import"./PressResponder-yU7fGlZ2.js";import"./useLocalizedStringFormatter-DgJKEd-_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dmt42pOw.js";import"./getScrollParent-CSjng6XF.js";import"./Modal-CKwhRkPQ.js";import"./x-DpepR7rv.js";import"./createLucideIcon-Dj8isrVr.js";import"./useLocalizedStringFormatter-TCo9J1WR.js";import"./Heading-BUWWv4-M.js";import"./info-COhBrfFw.js";import"./Popover-BS8zgk24.js";import"./check-Hna9uK0h.js";import"./useToggleState-CqzEiGMZ.js";import"./TextFieldBase-YWU1ZoUN.js";import"./Input-BU2rvLfi.js";import"./useTextField-DZHRixjc.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BBwoRrQ0.js";import"./DragAndDrop-CfxVfGNH.js";import"./inertValue-NdfqVnOi.js";import"./useListState-MQiKZGxj.js";import"./TagGroup-E0Eln9R1.js";import"./useHighlightSelectionDescription-BmM-93Bk.js";import"./useUpdateEffect-CLG66ZYz.js";import"./useHasTabbableChild-CrJCq_Bu.js";import"./chevron-down-DkHRLeW0.js";import"./Virtualizer-CofLdLJK.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

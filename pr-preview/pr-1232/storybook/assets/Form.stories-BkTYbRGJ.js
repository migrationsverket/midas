import{j as e}from"./iframe-BYwHSihz.js";import{c}from"./Form-xzTb284W.js";import{G as d}from"./Grid-plYPN4St.js";import{G as i}from"./GridItem-BwgGEVFR.js";import{a as x,R as u}from"./Radio-nOhONhgV.js";import{C as I}from"./CheckboxGroup-BOAuu2Pf.js";import{C as G}from"./Checkbox-C99bZHKh.js";import{T as t}from"./TextField-BLlgR59R.js";import{S as l}from"./Select-C4xJWvUj.js";import{L as p}from"./ListBoxItem-BcC0qbku.js";import{B as a}from"./Button-crEn75HL.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DxmY0qcu.js";import"./utils-Dh-IoFbm.js";import"./clsx-B-dksMZM.js";import"./index-CpfVIqpP.js";import"./index-d1liSO_o.js";import"./clsx-Ciqy0D92.js";import"./Group-CHWkQxXC.js";import"./FieldError-BWBSyxmE.js";import"./Text-DJX_2QXd.js";import"./Text-BHNKCnwU.js";import"./Button-DOnb1gUF.js";import"./Hidden-DpptCkiu.js";import"./useLabel-AYJIbpQy.js";import"./useLabels-C66ukF51.js";import"./useButton-xvHSlbxN.js";import"./SelectionIndicator-jYxL6MKO.js";import"./useField-Civc57Hk.js";import"./VisuallyHidden-2UqtjUFf.js";import"./useControlledState-CJUIxKhT.js";import"./Label-B2rCp1Xp.js";import"./Dialog-CrSFGI4p.js";import"./RSPContexts-BAR4w1ha.js";import"./OverlayArrow-r7TCtT7t.js";import"./useResizeObserver-APOBPQ6V.js";import"./Collection-Bo1oU8IZ.js";import"./index-Cu1eBBaC.js";import"./Separator-DCA-sdeI.js";import"./SelectionManager-iLot_8Vm.js";import"./useEvent-CBrs3Ilv.js";import"./scrollIntoView-D2NUCauH.js";import"./useDescription-CMXfddmg.js";import"./ListKeyboardDelegate-Dk9ALlMi.js";import"./PressResponder-LcoGqm7p.js";import"./useLocalizedStringFormatter-CIU3iXEN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dz0orPwe.js";import"./getScrollParent-DQgl8KcT.js";import"./ModalOverlay-DXb41Uo_.js";import"./x-CQCbnBEa.js";import"./createLucideIcon-COPS1n-B.js";import"./useLocalizedStringFormatter-7gjKuEfr.js";import"./Heading-CGdHWwLi.js";import"./info-C6ypPFRL.js";import"./Popover-JkrvUn9z.js";import"./check-Br9RrXoj.js";import"./useToggleState-Lt0Ew-TP.js";import"./TextFieldBase-Dg5AaZZh.js";import"./Input-d_MJQ0-d.js";import"./useTextField-DGxfNyX_.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DOUIIiKg.js";import"./DragAndDrop-CJ3epVsD.js";import"./inertValue-D8FZiIvw.js";import"./useListState-BKh__PXL.js";import"./TagGroup-PpFKJSnj.js";import"./useHighlightSelectionDescription-DkqbhJuh.js";import"./useUpdateEffect-DSu1XDsn.js";import"./useHasTabbableChild-CrloKPnr.js";import"./chevron-down-Bs-0q2Bq.js";import"./Virtualizer-BV_lz6oU.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

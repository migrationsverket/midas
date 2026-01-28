import{j as e}from"./iframe-B78wn1WG.js";import{$ as c}from"./Form-BPVKSKvY.js";import{G as d}from"./Grid-D3lscni3.js";import{G as i}from"./GridItem-YQubcSuk.js";import{T as t}from"./TextField-CnAMs9a_.js";import{S as l}from"./Select-CT-TI0Hv.js";import{B as a}from"./Button-C_05nidj.js";import{R as x,a as u}from"./Radio-Cjm2AW_s.js";import{C as I}from"./CheckboxGroup-BACANkyG.js";import{C as G}from"./Checkbox-OlOqem2t.js";import{L as p}from"./ListBoxItem-BzO_eL9G.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-RTE5txou.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DjwK84Yp.js";import"./useFocusRing-C06DFN8b.js";import"./index-2xn9MPia.js";import"./index-oZtTg3tM.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DNWVjJnm.js";import"./TextField-Cu-cTja-.js";import"./FieldError-BWFa-LBr.js";import"./Text-DhYauZPs.js";import"./Text-CI45cqHe.js";import"./RSPContexts-gOljqF4f.js";import"./Group-BsKZ-ZAN.js";import"./Input-D796a45l.js";import"./Hidden-Dmy_tbtO.js";import"./Button-Dj90Y4Eb.js";import"./useLabels-eN7I3lmh.js";import"./useButton-D0ftkHxr.js";import"./useTextField-66VUwVkb.js";import"./useControlledState-hc0v7KHB.js";import"./useField-BZ6Bn88N.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D8wejGKf.js";import"./Dialog-D35lAKZM.js";import"./OverlayArrow-D68Em3aM.js";import"./useResizeObserver-CGa1W_IZ.js";import"./Collection-DsNNavxH.js";import"./index-Bgt_Qwum.js";import"./Separator-CY7oQJq7.js";import"./SelectionManager-Bp1Fa3PG.js";import"./useEvent-C5Pl_19e.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-0X1b94tQ.js";import"./useDescription-DCMvsgkK.js";import"./ListKeyboardDelegate-BCvRBiIP.js";import"./PressResponder-C4_7qtDK.js";import"./useLocalizedStringFormatter-Da4CZSyZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmbCRhya.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-nx3fwYPE.js";import"./x-E1o5LEs9.js";import"./createLucideIcon-De6jokFF.js";import"./useLocalizedStringFormatter-DLBhvH3W.js";import"./Heading-ztzP_aN9.js";import"./info-BUpIPp0t.js";import"./Popover-qZ1lc34E.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-YQ0WcIQq.js";import"./DragAndDrop-BXb2nyjA.js";import"./inertValue-Dfz2L_2H.js";import"./useListState-CUC2PxK3.js";import"./Tag-CHY85Srf.js";import"./useHighlightSelectionDescription-CSHoRTZu.js";import"./useUpdateEffect-JbyTIYnp.js";import"./useHasTabbableChild-D9L7169E.js";import"./chevron-down-DAcs98kb.js";import"./Button.module-Co5e5YHp.js";import"./check-DB--x2og.js";import"./useToggleState-BRrxB5sU.js";import"./Virtualizer-DrLPsIiz.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

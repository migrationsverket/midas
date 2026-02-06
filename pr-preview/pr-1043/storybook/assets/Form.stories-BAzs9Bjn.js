import{j as e}from"./iframe-ATzl8XNu.js";import{$ as c}from"./Form-D7ezNQUV.js";import{G as d}from"./Grid-HE-OF3vV.js";import{G as i}from"./GridItem-esIeUpnD.js";import{a as x,R as u}from"./Radio-BLHEVWF-.js";import{C as I}from"./CheckboxGroup-TntV5VgE.js";import{C as G}from"./Checkbox-B6y1UGXM.js";import{T as t}from"./TextField-J1K5pjyl.js";import{S as l}from"./Select-BcNYMtpg.js";import{L as p}from"./ListBoxItem-Dnk2ZDML.js";import{B as a}from"./Button-Bsz6RG7e.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cephp3rV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BIKLk_Xn.js";import"./useFocusRing-ukiZ3Ae7.js";import"./index-CaW5UWpb.js";import"./index-V5YcHX-r.js";import"./clsx-Ciqy0D92.js";import"./Group-CDvS3XHI.js";import"./FieldError-C2MY82An.js";import"./Text-aG-TJfe-.js";import"./Text-B2jI714W.js";import"./Button-D92ovwB_.js";import"./Hidden-BWe0F6w6.js";import"./useLabels-tIVsswAO.js";import"./useButton-BsQSv027.js";import"./SelectionIndicator-DFa8mu4E.js";import"./useField-CBkghgUG.js";import"./VisuallyHidden-B7WhOGok.js";import"./useControlledState-BW_0fp0P.js";import"./Label-D6Gm1eFR.js";import"./Dialog-BdxJMQJi.js";import"./RSPContexts-g44b3QqL.js";import"./OverlayArrow-pyy3CoI-.js";import"./useResizeObserver-CXP8YjLm.js";import"./Collection-ZnBZXNKj.js";import"./index-DR9JhBGy.js";import"./Separator-jps98X89.js";import"./SelectionManager-F7a4txdx.js";import"./useEvent-CSZRshWR.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DCZ17iuR.js";import"./ListKeyboardDelegate-BCGM-8wK.js";import"./PressResponder-BQrkw8Wy.js";import"./useLocalizedStringFormatter-D8Kn80zC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bcg8ghzt.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BmEx4eXF.js";import"./createLucideIcon-JvePCe7s.js";import"./useLocalizedStringFormatter-OfhFidRK.js";import"./Heading-BTXgxYvk.js";import"./info-Bqh14NSG.js";import"./Popover-BpJW7gGU.js";import"./check-B1fFJJeb.js";import"./useToggleState-Y2vrFfha.js";import"./TextFieldBase-DHKdPHjq.js";import"./TextField-DSxispa-.js";import"./Input-DLyps54A.js";import"./useTextField-Jm6rKQrq.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-j0HO8TRh.js";import"./DragAndDrop-C8ndaE4o.js";import"./inertValue-BNRCWIB3.js";import"./useListState-cLdKaF44.js";import"./Tag-CrfbRuHC.js";import"./useHighlightSelectionDescription-DF4UhgnV.js";import"./useUpdateEffect-PxRhGDFm.js";import"./useHasTabbableChild-BtiNHYfv.js";import"./chevron-down-TNugYbGz.js";import"./Virtualizer-BZ3OAywV.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

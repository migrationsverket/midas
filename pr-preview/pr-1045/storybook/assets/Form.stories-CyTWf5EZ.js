import{j as e}from"./iframe-DAmvnAWM.js";import{$ as c}from"./Form-B1LrfJNY.js";import{G as d}from"./Grid-DKcDJ1ZU.js";import{G as i}from"./GridItem-hQJqmxlp.js";import{a as x,R as u}from"./Radio-CjSBMi-a.js";import{C as I}from"./CheckboxGroup-BcDzJY40.js";import{C as G}from"./Checkbox-DLeZsQYR.js";import{T as t}from"./TextField-BAtNxBwp.js";import{S as l}from"./Select-BOZlyNaE.js";import{L as p}from"./ListBoxItem-Cm5fX_uC.js";import{B as a}from"./Button-CI9p286k.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DYzArhpk.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BCE_H7GP.js";import"./useFocusRing-QsJJnFOd.js";import"./index-smKRG6Ei.js";import"./index-iQgIb4dd.js";import"./clsx-Ciqy0D92.js";import"./Group-mTQnelXy.js";import"./FieldError-CC3CownB.js";import"./Text-BHD5lpJL.js";import"./Text-CSZqV0cb.js";import"./Button-DrLU6fB6.js";import"./Hidden-BYI0l7bh.js";import"./useLabels-xfye1LU6.js";import"./useButton-DE9dKRCV.js";import"./SelectionIndicator-DpfuH37l.js";import"./useField-3CFuHcV3.js";import"./VisuallyHidden-BneHcT7D.js";import"./useControlledState-BjmKk3Qz.js";import"./Label-DZzLHIqr.js";import"./Dialog-Ci_aUo6D.js";import"./RSPContexts-SFPpukGj.js";import"./OverlayArrow-D2HkM_v8.js";import"./useResizeObserver-Cf3C6UeM.js";import"./Collection-C66Lj0rx.js";import"./index-Nu6RYaow.js";import"./Separator-kVJUjc11.js";import"./SelectionManager-B-T3Q6de.js";import"./useEvent-DfaC2w5t.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CYqVIVXJ.js";import"./ListKeyboardDelegate-DBzt-ToB.js";import"./PressResponder-lw3aftXV.js";import"./useLocalizedStringFormatter-B4UBrv2w.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DgXXWlXd.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BtpaJG07.js";import"./createLucideIcon-BXDZxBO_.js";import"./useLocalizedStringFormatter-BtExqc3U.js";import"./Heading-DhgmXja-.js";import"./info-D2SmloP4.js";import"./Popover-hGYNeJ-f.js";import"./check-BJZQmyXj.js";import"./useToggleState-CwxmSBnv.js";import"./TextFieldBase-CGHNnIk0.js";import"./TextField-9RtqCLvK.js";import"./Input-QCl0d19g.js";import"./useTextField-DEbz6k8C.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BOP-l7BG.js";import"./DragAndDrop-DNItkLEq.js";import"./inertValue-CFmgLGRA.js";import"./useListState-DkX3u_c4.js";import"./Tag-D2AB4FjO.js";import"./useHighlightSelectionDescription-GymAZN2i.js";import"./useUpdateEffect-D4yQapjp.js";import"./useHasTabbableChild-CHm-4EAO.js";import"./chevron-down-Mmlc_YZv.js";import"./Virtualizer-k795vlj7.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

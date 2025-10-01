import{j as n}from"./iframe-CDAZ34uy.js";import{$ as j}from"./Form-B9m3Maeg.js";import{G}from"./Grid-B4Z6Uz43.js";import{G as e}from"./GridItem-Z26Kai9f.js";import{T as r}from"./TextField-3fsPUmV7.js";import{S as I}from"./Select-CJ5fHtnf.js";import{B as a}from"./Button-BYpefliX.js";import{R as g,a as b}from"./Radio-B7mI3ERS.js";import{C as h}from"./CheckboxGroup-CXb2Q5id.js";import{C as k}from"./Checkbox-BzSk-3A5.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BQDvJH32.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-sWWvwLPZ.js";import"./useFocusRing-CHglryp9.js";import"./index-lSFwHyeb.js";import"./index-C9J6hktL.js";import"./TextFieldBase-BrISiLUA.js";import"./TextField-DE0yBxtk.js";import"./FieldError-CCFmGjZX.js";import"./Text-BftVPc__.js";import"./Text-GyHj1f2S.js";import"./context-CQe-hW2q.js";import"./SelectionManager-BvX7e6rP.js";import"./useEvent-D15mWTNs.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-B8Jd03Cn.js";import"./useDescription-OcAyeV9H.js";import"./useControlledState-WjJBc0Iz.js";import"./Group-C89u98ev.js";import"./Input-DEQMWgk4.js";import"./Hidden-CBlrqGKV.js";import"./Button-D4bAXa-X.js";import"./useLabels-BaOaodb-.js";import"./useButton-DwiYAf8z.js";import"./useTextField-C8j92lbe.js";import"./useField-DzTPJ-fN.js";import"./TextField.module-DjUItNl5.js";import"./Label-G9_Dmw-3.js";import"./Dialog-D1h620Rm.js";import"./RSPContexts-CI952nph.js";import"./OverlayArrow-CpIzMhNL.js";import"./useResizeObserver-BzLSZndC.js";import"./Collection-0EENykbX.js";import"./index-CSZO48Wz.js";import"./Separator-MJY3tWDF.js";import"./PressResponder-BPDoqwGH.js";import"./useLocalizedStringFormatter-C-Vu4aUR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DsFSZzKO.js";import"./useLocalizedStringFormatter-DyEsksbU.js";import"./x-B7KOGJVG.js";import"./createLucideIcon-BNRL6FEQ.js";import"./Heading-B6VbUBrV.js";import"./info-C7QDbzUn.js";import"./Popover-DH454TlU.js";import"./Tag-bVyHJo6V.js";import"./ListBox-BZSD-4ne.js";import"./DragAndDrop-CvhnEufl.js";import"./inertValue-Ckzxed5g.js";import"./useListState-ClakhUDC.js";import"./useHighlightSelectionDescription-Cd5UB7Ry.js";import"./useUpdateEffect-D9q_12Td.js";import"./useHasTabbableChild-C0pyLPTB.js";import"./check-ce7xoPz8.js";import"./ListBoxSection-Dp5lp8Ck.js";import"./Virtualizer-BzDVtzve.js";import"./useObserveElement-PTrUG9KG.js";import"./chevron-down-LNZvabNZ.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BmQl1H_2.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};

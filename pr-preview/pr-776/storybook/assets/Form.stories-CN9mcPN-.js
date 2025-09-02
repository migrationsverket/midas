import{j as n}from"./iframe-DH2Gx0Ud.js";import{$ as j}from"./Form-YFyNGVqw.js";import{G}from"./Grid-Dazhf7YG.js";import{G as e}from"./GridItem-B78Ihtm5.js";import{T as r}from"./TextField-CzMYoBok.js";import{S as I}from"./Select-dPRvRT-Y.js";import{B as a}from"./Button-BWn7xZ64.js";import{R as g,a as b}from"./Radio-Bf5-Iv0n.js";import{C as h}from"./CheckboxGroup-Cj8Z6knw.js";import{C as k}from"./Checkbox-BCE_5NxP.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-3KFB3ajO.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DVGLhj_O.js";import"./useFocusRing-Sn1eX78u.js";import"./index-CpvnbC2S.js";import"./index-Dstc05p1.js";import"./TextFieldBase-D88GF87z.js";import"./TextField-BXTUitfp.js";import"./FieldError-CIW9a6rw.js";import"./Text-CQUQA4ZN.js";import"./Text-BLcM0L5Y.js";import"./ListKeyboardDelegate-CAw6gimi.js";import"./SelectionManager-yktNWr7c.js";import"./useEvent-Boo6xKyS.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BslWwFUL.js";import"./useDescription-DGsMSsoo.js";import"./useControlledState-DRwzZhIl.js";import"./Group-tAA9iY2Z.js";import"./Input-DBVfCByq.js";import"./Hidden-BYMikgpC.js";import"./Button-uXsnUvJd.js";import"./useLabels-wxoJPCU_.js";import"./useButton-B9O2Kaft.js";import"./useTextField-27-lelSl.js";import"./useField-DMaEHpAw.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-wzVEKjd8.js";import"./Dialog-B4z3Djqz.js";import"./RSPContexts-CEGtI45p.js";import"./OverlayArrow-C2BaZQcN.js";import"./useResizeObserver-BYXSJR9H.js";import"./Collection-DITETa1G.js";import"./index-CWLeO-FQ.js";import"./Separator-C8BNDXrK.js";import"./PressResponder-D5lXtqmV.js";import"./useLocalizedStringFormatter-BQYbT8TD.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BuDuYmuc.js";import"./Dialog-74l4zj-n.js";import"./useLocalizedStringFormatter-D8VfQ-b2.js";import"./x-QSb5yQih.js";import"./createLucideIcon-BdNGfo6D.js";import"./Heading-DVoG2C9H.js";import"./info-Cl1ysGdA.js";import"./Tag-DsAeaQi3.js";import"./ListBox-CQZqaSdm.js";import"./DragAndDrop-B_UQcwVC.js";import"./inertValue-Dv-RyiUI.js";import"./useListState-BRmoZFNI.js";import"./useHighlightSelectionDescription-Bn_9h6kg.js";import"./useUpdateEffect-BKRpOjHC.js";import"./useHasTabbableChild-BpGhunoM.js";import"./check-Df58L5WR.js";import"./ListBoxSection-BlihNU7U.js";import"./Virtualizer-DNKolGTa.js";import"./useObserveElement-D4sJrLZ0.js";import"./chevron-down-BqzfEU_z.js";import"./Button.module-DWkXlqFG.js";import"./useToggleState-DEEdDoqA.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

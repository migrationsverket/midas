import{j as n}from"./iframe-DzOy1gAk.js";import{$ as j}from"./Form-C26u964c.js";import{G}from"./Grid-DQ76wPHP.js";import{G as e}from"./GridItem-B3qasmKe.js";import{T as r}from"./TextField-CkY4m68N.js";import{S as I}from"./Select-CGyhu2vz.js";import{B as a}from"./Button-D4whKl8Q.js";import{R as g,a as b}from"./Radio-NbYKajER.js";import{C as h}from"./CheckboxGroup-DsyHgdMY.js";import{C as k}from"./Checkbox-Ddfd8Eg_.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CspyMWq6.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DXodF8jw.js";import"./useFocusRing-ZOcLu7gP.js";import"./index-B-FdS93T.js";import"./index-DShvf5eO.js";import"./TextFieldBase-BBVVeVUh.js";import"./TextField-DnavC33v.js";import"./FieldError-DU-LtMV-.js";import"./Text-mcLyK5_Z.js";import"./Text-wfi8G8r9.js";import"./ListKeyboardDelegate-NDqUZn9F.js";import"./SelectionManager-Qd01U8HL.js";import"./useEvent-Cgx3qB44.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BGAWioR1.js";import"./useDescription-04UgQ2LJ.js";import"./useControlledState-DB34tEyA.js";import"./Group-WTvNZKpF.js";import"./Input-DEEbaq_1.js";import"./Hidden-Bm7n3ZtD.js";import"./Button-CVwnm0R9.js";import"./useLabels-CHHIF30u.js";import"./useButton-Cl9ZaFdH.js";import"./useTextField-B354uEf5.js";import"./useField-DG40KQoK.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-CBMnbceg.js";import"./Dialog-Dd9xiLGH.js";import"./RSPContexts-DRHF7NvQ.js";import"./OverlayArrow-Bbn_Hmvr.js";import"./useResizeObserver-BvigoHx8.js";import"./Collection-BNZ21LAj.js";import"./index-Dl9MKa6j.js";import"./Separator-DA6j-Bcy.js";import"./PressResponder-CheqEiGU.js";import"./useLocalizedStringFormatter-BNPb1Dfw.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DV0IJXFv.js";import"./Dialog-Oeussk7T.js";import"./useLocalizedStringFormatter--dNdbTyf.js";import"./x-C-DvWUo8.js";import"./createLucideIcon-CV31QyPd.js";import"./Heading-BobYtVIs.js";import"./info-CYqhUwhv.js";import"./Tag-HJd6sLXU.js";import"./ListBox-B6IFrDpF.js";import"./DragAndDrop-BzbhvSER.js";import"./inertValue-CJsdE1_M.js";import"./useListState-DsUmBwNr.js";import"./useHighlightSelectionDescription-KZbxBEFg.js";import"./useUpdateEffect-BeQNuDMC.js";import"./useHasTabbableChild-BJWBDmip.js";import"./check-DPq9kr8t.js";import"./ListBoxSection-CYXj4P13.js";import"./Virtualizer-DK9e091o.js";import"./useObserveElement-BXCcVhwf.js";import"./chevron-down-CTXVHiTR.js";import"./Button.module-DgYkWG2o.js";import"./useToggleState-gAtPVzV2.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

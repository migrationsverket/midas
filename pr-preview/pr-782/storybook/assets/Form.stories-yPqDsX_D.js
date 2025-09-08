import{j as n}from"./iframe-C2Jgh-q7.js";import{$ as j}from"./Form-Cb0-fyiY.js";import{G}from"./Grid-DOdMpEsQ.js";import{G as e}from"./GridItem-CVXuCX5e.js";import{T as r}from"./TextField-DXRICcEm.js";import{S as I}from"./Select-DcN4kL4c.js";import{B as a}from"./Button-BpB-CONs.js";import{R as g,a as b}from"./Radio-DIHA8-2e.js";import{C as h}from"./CheckboxGroup-D877Js24.js";import{C as k}from"./Checkbox-lWoViOz_.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Bq9Sv57C.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B5NAPhB6.js";import"./useFocusRing-Du_O-Ixu.js";import"./index-KIR8PsR_.js";import"./index-DUTftEie.js";import"./TextFieldBase-CZQ1rB-w.js";import"./TextField-CB4x-bym.js";import"./FieldError-CU9uEZlt.js";import"./Text-CEvwx_K-.js";import"./Text-D0LbO0c2.js";import"./ListKeyboardDelegate-DPdkBtAJ.js";import"./SelectionManager-DYA7_qJe.js";import"./useEvent-BXKe98Us.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-SuRXU6Z-.js";import"./useDescription-4mbS2drY.js";import"./useControlledState-CojmLSze.js";import"./Group-DN8KlN9j.js";import"./Input-Dqvzm-jT.js";import"./Hidden-V1NiDjQ4.js";import"./Button-UG8rJ7vm.js";import"./useLabels-DfDvv5EX.js";import"./useButton-B9aPhLhK.js";import"./useTextField-BkqKhq2V.js";import"./useField-Bu5IqXuV.js";import"./TextField.module-DjUItNl5.js";import"./Label-D0NbrEfl.js";import"./Dialog-Bjt3gOe0.js";import"./RSPContexts-Tmr2mgzY.js";import"./OverlayArrow-l2iDnyGZ.js";import"./useResizeObserver-bR5FLLWr.js";import"./Collection-D917MT2A.js";import"./index-BIFEwGRQ.js";import"./Separator-C0koW62U.js";import"./PressResponder-DdErT3Vb.js";import"./useLocalizedStringFormatter-CjHHqDYq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D5rLWPpt.js";import"./Dialog-CcER-j0Q.js";import"./useLocalizedStringFormatter-j5wDFpVx.js";import"./x-BpDTJFG1.js";import"./createLucideIcon-DYsE5YRH.js";import"./Heading-C-mpnGYu.js";import"./info-vAjXDpeN.js";import"./Tag-BsYz-I1M.js";import"./ListBox-CPuw5EQ2.js";import"./DragAndDrop-DhI667ha.js";import"./inertValue-OIsJAN5q.js";import"./useListState-BGdN_NL-.js";import"./useHighlightSelectionDescription-DTjXM14b.js";import"./useUpdateEffect-CZ-d2jYo.js";import"./useHasTabbableChild-BbnhBINV.js";import"./check-BuZj3FBT.js";import"./ListBoxSection-Cuddmeny.js";import"./Virtualizer-DXD67abi.js";import"./useObserveElement-BihMpKoc.js";import"./chevron-down-CsJDpRc6.js";import"./Button.module-okL0tbxC.js";import"./useToggleState-DXPgu2Dl.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
